<template>
    <h1 class="font-bold text-[2em] text-white">FAQ</h1>
    <div class="flex justify-center">
        <div class="px-8 xl:px-0 max-w-[1280px] space-y-12">
            <div v-for="faq in faqs" :key="faq.q" class="space-y-2 text-white">
                <div class="font-bold">{{ faq.q }}</div>
                <div>{{ faq.a }}</div>
            </div>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const faqs = ref([])

// Life cycle
onMounted(() => {
    fetchFAQs()
})

// Action
const fetchFAQs = async() => {
    try {
        const response = await axios.get('https://api.bummo.dev/letswift2024/faq')
        faqs.value = response.data
    } catch (error) {
        console.error(error)
    }
}
</script>