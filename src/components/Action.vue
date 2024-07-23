<template>
    <div class="py-16 flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-12 sm:space-y-0">
        <div v-for="link in links" :key="link.text">
            <a class="glow-orange px-16 py-4 font-semibold text-lg sm:text-2xl text-white hover:text-white active:text-white bg-orange-500 hover:bg-orange-500 active:bg-orange-600 rounded-full transition" :href="link.url" target="_blank">{{ link.text }}</a>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
const links = [
    { 'text': '연사자 신청', 'url': 'https://forms.gle/u1HLr6Vm422PM1HN6' },
    { 'text': '후원사 문의', 'url': 'mailto:letswift.official@gmail.com?subject=Let%27Swift%202024%20%ED%9B%84%EC%9B%90%EC%82%AC%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry' },
]
</script>