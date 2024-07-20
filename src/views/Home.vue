<template>
    <Title/>
    <Events/>
    <Social/>
</template>

<!-- Script -->
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Title from '../components/Title.vue'
import Events from '../components/Events.vue'
import Social from '../components/Social.vue'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.push('/pc')
    }, 10 * 60 * 1000)
})
</script>
