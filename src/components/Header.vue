<template>
    <header class="flex justify-center backdrop-blur-lg bg-black/50">
        <div class="px-8 xl:px-0 max-w-[1280px] flex items-center flex-grow space-x-4">
            <!-- Left -->
            <router-link to="/">
                <div class="font-black text-[2em]">
                    <span class="text-rainbow box-shadow-xl">Let'Swift 2024</span>
                </div>
            </router-link>
            <div class="grow"></div>
            <!-- Right -->
             <div class="flex space-x-6 items-center">
                <div v-for="item in menu" :key="item">
                    <a :href="item.link" class="font-semibold text-[1.2em] text-white">{{ item.name }}</a>
                </div>
                <a class="mb-8 lg:mb-0 px-4 py-2 font-semibold text-slate-700 hover:text-white active:text-white bg-themeBlue hover:bg-themeBlue/70 active:bg-themeBlue/50 rounded-full transition" href="https://festa.io/events/3860" target="_blank">Get Ticket</a>
             </div>
        </div>
    </header>
</template>

<!-- Script -->
<script setup>
const menu = [
    { 'name': 'Sponsors', 'link': '#sponsors' },
    { 'name': 'Venue', 'link': '#venue' },
    { 'name': 'Schedule', 'link': '#schedule' },
    { 'name': 'Speakers', 'link': '#speakers' },
    { 'name': 'Organizers', 'link': '#organizers' },
    { 'name': 'FAQ', 'link': '#faq' }
]
</script>