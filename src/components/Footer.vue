<template>
    <footer class="flex justify-center backdrop-blur-lg bg-black/50">
        <div class="px-8 xl:px-0 py-16 max-w-[1280px] flex flex-col-reverse lg:flex-row lg:flex-grow items-center space-x-4">
            <!-- Left -->
            <div class="flex flex-col items-center lg:items-start font-medium text-xs space-y-2">
                <!-- First row -->
                <div class="text-slate-400">
                    <span>Designed & Developed by </span>
                    <a href="https://github.com/gbmksquare/" target="_blank" class="text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50">Bummo Koo</a>
                </div>
                <!-- Second row -->
                <div class="flex flex-col space-x-4 space-y-4 lg:flex-row lg:space-y-0">
                    <div>
                        <span class="text-slate-400">Copyright © 2024 </span>
                        <span class="font-semibold text-slate-100">Let'Swift.</span>
                        <span class="text-slate-400"> All rights reserved.</span>
                    </div>
                    <div class="flex space-x-2">
                        <div>
                            <router-link to="/CodeOfConduct" class="text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50">
                                Code of Conduct
                            </router-link>
                        </div>
                        <div class="select-none text-slate-600">|</div>
                        <div><a href="https://apps.apple.com/app/id1282995254" target="_blank" class="text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50">Let'Swift App</a></div>
                        <div class="select-none text-slate-600">|</div>
                        <div><a href="https://page.stibee.com/subscriptions/58654" target="_blank" class="text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50">Join Newsletter</a></div>
                    </div>
                    <div class="grow"></div>
                </div>
            </div>
            <div class="grow"></div>
            <!-- Right -->
             <Social/>
             <!-- <a class="mb-8 lg:mb-0 px-4 py-2 font-semibold text-slate-700 hover:text-white active:text-white bg-themeBlue hover:bg-themeBlue/70 active:bg-themeBlue/50 rounded-full transition" href="https://page.stibee.com/subscriptions/58654" target="_blank">Let'Swift 뉴스레터 구독</a> -->
        </div>
    </footer>
</template>

<!-- Script -->
<script setup>
import Social from './Social.vue'
</script>