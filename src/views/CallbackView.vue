<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';

    const route = useRoute();
    const router = useRouter();
    const routeHash = ref("");
    const authStore = useAuthStore();

    onMounted(() => {
        routeHash.value = route.hash;
        
        loginCallback();
    });

    async function loginCallback() {
        if(routeHash.value.substring(1).split('&')[0].includes("access_token")) {
            await authStore.login(routeHash.value.substring(1).split('&')[0].split("access_token=")[1], routeHash.value.substring(1).split('&')[3].split("state=")[1]);
            router.push({name: 'dashboard'});
        }
    }
</script>

<template>
    <div class="callback">
        <h1>This is the callback page</h1>
    </div>
</template>