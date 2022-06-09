import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useTracksStore } from '@/stores/tracks';
import ApiService from '@/services/ApiService.js';
import UtilsService from '@/services/UtilsService';

export const useAuthStore = defineStore('auth', () => {

    const trackStore = useTracksStore();

    const spotifyParams = reactive({
        accessToken: "",
        clientID: 'ff0d2e6c7c69449e9aff9451a85c3192',
        scope: 'user-read-private user-read-email user-library-read user-read-recently-played user-read-currently-playing',
        redirectURI: 'http://localhost:3000/callback',
        state: UtilsService.generateRandomString(20)
    });

    const spotifyUser = reactive({
        isLoggedIn: false,
        displayName: ""
    });

    async function login(token, state) {
        spotifyParams.accessToken = token;
        spotifyParams.state = state;
        localStorage.setItem("token", token);

        await ApiService.getProfile(spotifyParams.accessToken).then(profile => {
            spotifyUser.isLoggedIn = true;
            spotifyUser.displayName = profile.display_name;
            localStorage.setItem("user", profile.display_name);
        });
    }

    function logout() {
        spotifyParams.accessToken = "";
        spotifyUser.isLoggedIn = false;
        spotifyUser.displayName = "";
        trackStore.clearTracksDate();
        localStorage.clear();
    }

    spotifyParams.accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : "";
    if(localStorage.getItem('user')) {
        spotifyUser.isLoggedIn = true;
        spotifyParams.user = localStorage.getItem('user')
    }

    return { spotifyParams, spotifyUser, login, logout };
});