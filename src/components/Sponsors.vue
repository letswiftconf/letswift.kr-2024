<template>
    <h1 class="font-bold text-[2em] text-white">Sponsors</h1>
    <div class="flex justify-center">
        <div class="px-8 xl:px-0 max-w-[1280px] space-y-12">
            <div class="grid grid-cols-4 gap-x-24 gap-y-24">
                <div v-for="sponsor in sponsors" :key="sponsor.id" class="flex flex-col items-center space-y-4 text-white">
                    <img :src="sponsor.image_url" loading="lazy" class="w-32 rounded-lg object-cover"/>
                    <div class="flex flex-col space-y-1">
                        <div class="font-bold">{{ sponsor.name }}</div>
                        <div>{{ sponsor.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sponsors = ref([])

// Life cycle
onMounted(() => {
    fetchSponsors()
})

// Action
const fetchSponsors = async() => {
    try {
        const response = await axios.get('https://api.bummo.dev/letswift2024/sponsor')
        sponsors.value = response.data
    } catch (error) {
        console.error(error)
    }
}
</script>