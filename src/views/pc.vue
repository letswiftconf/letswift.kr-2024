<template>
    <!-- BSOD -->
    <div class="flex flex-col sm:place-content-center h-dvh bg-[#0088e7]">
        <div class="mt-8 sm:mt-0 flex flex-col px-8 sm:px-16 max-w-[720px] space-y-14 justify-center items-left text-white text-left">
            <div class="text-[12rem]">:)</div>
            <div class="text-2xl">Your PC ran into a conference and wants to attend. We're just telling you some conference info, and then we'll refresh for you.</div>
            <div class="text-2xl">11.25 Let'Swift</div>

            <div class="flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 align-top">
                <img src="../assets/apply_speaker.png" class="bg-white w-20 h-20 object-contain" alt="qr code"></img>
                <div class="flex flex-col text-sm">
                    <div>For more information about the conference, visit <a href="https://letswift.kr">https://letswift.kr</a></div>
                    <div class="grow mt-4 sm:mt-0"></div>
                    <div>If you  meet a friend, give them this info:</div>
                    <div>Stop code: LET_SWIFT_2024</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Title -->
    <router-link to="/">
        <div class="font-black text-[3em]">
            <span class="text-rainbow box-shadow-xl">Let'Swift 2024</span>
        </div>
    </router-link>
    <span class="text-white text-3xl">
        🪺
    </span>
</template>

<!-- Script -->
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.push('/')
    }, 5 * 60 * 1000)
})
</script>
