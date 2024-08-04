<template>
    <h1 class="font-bold text-[2em] text-white">Schedule</h1>
    <div class="flex justify-center">
        <div class="px-8 xl:px-0 max-w-[1280px] space-y-12">
            <div v-for="session in schedule" :key="session.id" class="flex flex-col items-center space-y-4 text-white">
                <div class="flex flex-col space-y-1">
                    <div class="font-bold">{{ session.name }}</div>
                    <div>{{ session.type }}</div>
                    <div>{{ session.venue }}</div>
                    <div>{{ session.speaker.name }}</div>
                    <div>{{ session.start_time }} - {{ session.end_time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const schedule = ref([])

// Life cycle
onMounted(() => {
    fetchSchedule()
})

// Action
const fetchSchedule = async() => {
    try {
        const response = await axios.get('https://api.bummo.dev/letswift2024/schedule')
        schedule.value = response.data
    } catch (error) {
        console.error(error)
    }
}
</script>