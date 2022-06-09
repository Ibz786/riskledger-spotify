import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTracksStore = defineStore('tracks', () => {

    const userRecentlyPlayedTracks = ref([]);

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

    function setPlayedTracks(tracks) {
        userRecentlyPlayedTracks.value = tracks;
    }

    return { userRecentlyPlayedTracks, getArtists, setPlayedTracks };
});