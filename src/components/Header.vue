<script setup>
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';

    const router = useRouter();
    const authStore = useAuthStore();
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${authStore.spotifyParams.clientID}&scope=${authStore.spotifyParams.scope}&redirect_uri=${authStore.spotifyParams.redirectURI}&state=${authStore.spotifyParams.state}&show_dialog=true`;

    function logout() {
        authStore.logout();
        router.push({name: 'home'});
    }
</script>

<template>
    <header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
                <a v-if="!authStore.spotifyUser.isLoggedIn" :href="url">Login</a>
                <a v-if="authStore.spotifyUser.isLoggedIn" @click="logout">Logout</a>
			</nav>
		</div>
	</header>
</template>

<style>
    header {
        line-height: 1.5;
        max-height: 100vh;
    }
</style>