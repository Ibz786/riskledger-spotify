<script setup>
    import { useTracksStore } from '@/stores/tracks';
import { ref } from 'vue';

    const tracksStore = useTracksStore();

    const artists = ref([]);

    function getArtists() {
        artists.value = tracksStore.getArtists;
    }

    getArtists();
</script>

<template>
    <aside>
		<h2 class="green">Recently Played Artists</h2>
        <ul>
            <li v-for="artist in artists" :key="artist.id">{{artist.name}}</li>
        </ul>
	</aside>
</template>

<style>
    aside {
        color: white;
        line-height: 1.5;
        max-height: 100vh;
    }
</style>