import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTracksStore = defineStore('tracks', () => {

    const userRecentlyPlayedTracks = ref([]);
    const selectedArtist = ref("");

    const getArtists = computed(() => {
        let artistArr = [];
        let artistMap = {};
        userRecentlyPlayedTracks.value.forEach(track => {
            track.track.artists.forEach(artist => {
                if(!artistMap[artist.name]) {
                    artistMap[artist.name] = {
                        id: artist.id,
                        name: artist.name,
                        playedAt: track.played_at
                    }
                }
            });
        });

        for (let artist in artistMap) {
            artistArr.push(artistMap[artist]);
        }

        artistArr.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        return artistArr;
    });

    const getTracks = computed(() => {
        if(selectedArtist.value) {
            return userRecentlyPlayedTracks.value.filter(track => {
                return track.track.artists.some(artist => {
                    return artist.id === selectedArtist.value;
                });
            });
        }
        else {
            return userRecentlyPlayedTracks.value;
        }
    });

    function setPlayedTracks(tracks) {
        userRecentlyPlayedTracks.value = tracks;
    }

    function selectArtist(artist) {
        selectedArtist.value = artist || "";
        artist ? localStorage.setItem("selectedArtist", artist) : localStorage.removeItem("selectedArtist");

    }

    selectedArtist.value = localStorage.getItem('selectedArtist') ? localStorage.getItem('selectedArtist') : "";

    return { userRecentlyPlayedTracks, selectedArtist, getArtists, getTracks, setPlayedTracks, selectArtist };
});