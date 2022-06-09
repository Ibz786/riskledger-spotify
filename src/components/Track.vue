<script setup>
    defineProps({
        name: String,
        image: String
    })
</script>

<template>
    <li class="track">
        <img :src="image">
        <p>{{name}}</p>
    </li>
</template>