<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import { useTracksStore } from '@/stores/tracks';
    import ApiService from '@/services/ApiService.js';
    import Track from '@/components/Track.vue';
    import Sidebar from '@/components/Sidebar.vue';
    
    const heading = "Recently played tracks";
    const tracksData = ref({});
    const authStore = useAuthStore();
    const trackStore = useTracksStore();

    if(!authStore.spotifyParams.accessToken) {
        const router = useRouter();
        router.push({name: 'home'});
    }
    else {
        ApiService.getTracks(authStore.spotifyParams.accessToken).then(tracks => {
            trackStore.setPlayedTracks(tracks.items);
            tracksData.value = tracks.items;
        });
    }
</script>

<template>
    <div class="dashboard">
        <Sidebar v-if="tracksData.length > 0"/>
        <h1 class="green">{{ heading }}</h1>

        <ul class="tracks-container">
            <Track v-for="track in tracksData" :key="track.track.id" :name="track.track.name" :image="track.track.album.images[1].url" />
        </ul>
    </div>
</template>