<script setup>
    import { useTracksStore } from '@/stores/tracks';
import { ref } from 'vue';

    const tracksStore = useTracksStore();

    const artists = ref([]);

    function getArtists() {
        artists.value = tracksStore.getArtists;
    }

    function filterArtists(artistId) {
        tracksStore.selectArtist(artistId);
    }

    function clearFilter() {
        tracksStore.selectArtist();
    }

    getArtists();
</script>

<template>
    <aside>
		<h2 class="green">Recently Played Artists</h2>
        <ul class="artist-list">
            <li v-for="artist in artists" :key="artist.id">
                <a @click="filterArtists(artist.id)">{{artist.name}}</a>
            </li>
        </ul>
        <button type="button" class="artist-list-clear" @click="clearFilter">Clear</button>
	</aside>
</template>

<style>
    aside {
        color: white;
        line-height: 1.5;
        max-height: 100vh;
    }
</style>