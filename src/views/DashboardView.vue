<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import ApiService from '@/services/ApiService.js';
    import Track from '@/components/Track.vue';
    import Sidebar from '@/components/Sidebar.vue';
    
    const heading = "Recently played tracks";
    const tracksData = ref({});
    const authStore = useAuthStore();

    if(!authStore.spotifyParams.accessToken) {
        const router = useRouter();
        router.push({name: 'home'});
    }
    else {
        ApiService.getTracks(authStore.spotifyParams.accessToken).then(tracks => {
            tracksData.value = tracks;
        });
    }
</script>

<template>
    <div class="dashboard">
        <Sidebar />
        <h1 class="green">{{ heading }}</h1>

        <ul class="tracks-container">
            <Track v-for="track in tracksData.items" :key="track.track.id" :name="track.track.name" :image="track.track.album.images[1].url" />
        </ul>
    </div>
</template>