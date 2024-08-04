<template>
    <div class="mt-8 sm:mt-0 flex flex-col text-white space-y-4 sm:h-dvh sm:place-content-center">
        <div class="grow"></div>
        <!-- logo-->
        <!-- <div class="flex justify-center">
            <svg class="text-orange-500/80" width="150px" height="150px" viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="currentColor" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                    <path d="M322.773,599.375 C477.821,587.73 600,458.195 600,300.114 C600,134.366 465.682,0 299.992,0 C144.814,0 17.153,117.858 1.5798,268.974 C76.7165,189.629 182.966,148.332 275.595,171.59 C277.821,172.148 279.991,172.79 282.161,173.432 L282.162,173.432 L282.162,173.433 L282.163,173.433 L282.164,173.433 C282.604,173.563 283.045,173.694 283.486,173.824 C283.506,173.806 283.521,173.791 283.542,173.774 C356.951,114.093 435.639,130.327 420.791,137.966 C360.119,169.159 375.608,227.275 390.875,256.697 C392.328,259.138 393.704,261.634 395.056,264.148 C395.138,264.283 395.224,264.431 395.31,264.58 L395.311,264.58 C395.41,264.752 395.509,264.924 395.604,265.074 L395.534,265.026 C428.063,326.264 430.471,408.485 394.952,491.167 C377.382,532.059 352.425,568.649 322.773,599.375 Z M288.196,600 C289.222,597.917 290.229,595.822 291.217,593.715 C332.126,506.336 329.172,418.576 291.177,356.468 C238.369,425.159 173.156,485.027 113.049,534.854 C122.743,542.589 132.927,549.737 143.546,556.242 L268.56,412.657 L180.565,575.507 C189.835,579.535 199.349,583.109 209.078,586.2 L286.064,425.172 C293.928,442.479 298.527,500.171 258.683,597.406 C268.381,598.742 278.226,599.614 288.196,600 Z M94.3935,518.673 C84.759,509.6 75.7244,499.897 67.3556,489.629 C102.447,462.804 145.387,427.971 184.262,391.161 C170.671,415.387 134.678,466.919 94.3935,518.673 Z M57.1535,476.378 C147.829,375.545 197.968,294.311 197.968,294.311 C200.427,289.851 202.392,286.529 204.124,283.893 C197.892,281.464 191.48,279.266 184.8,277.438 C125.685,261.26 59.8764,272.223 0,303.215 C0.122558,315.324 0.961985,327.261 2.47785,338.986 C34.9627,319.622 90.0423,291.923 128.562,290.124 L14.3504,392.135 C17.2014,400.998 20.4531,409.681 24.0843,418.163 L153.557,305.128 C138.113,331.15 95.233,397.307 44.8732,458.106 C48.7474,464.353 52.8446,470.447 57.1535,476.378 Z" id="Shape"></path>
                </g>
            </svg>
        </div> -->
        <!-- Title -->
        <div class="px-1 font-black text-[4em] lg:text-[6em]">
            <span class="text-rainbow leading-none box-shadow-xl">Let'Swift 2024</span>
        </div>
        <!-- Info -->
        <div class="flex flex-col space-y-2 font-bold">
            <div class="text-xl lg:text-2xl">
                <span class="text-slate-200">2024년 </span>
                <span>11월 25일</span>
                <span class="text-slate-200"> 월요일</span>
            </div>
            <div class="text-lg lg:text-xl text-slate-300">
                <span>세종대학교</span>
                <span> 컨벤션홀</span>
            </div>
            <div>
                <div class="mt-1">
                    <button @click="createCalendar" class="text-sm text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50 active:orange-600">캘린더에 추가</button>
                </div>
            </div>
        </div>
        <!-- Action buttons -->
        <Action/>
        <div class="grow"></div>
        <!-- Arrow -->
        <div class="py-12 hidden sm:flex justify-center">
            <svg class="text-slate-400 animate-bounce" width="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g stroke="currentColor" stroke-width="1" fill="currentColor">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </g>
            </svg>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import Action from './Action.vue'

const createCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Let'Swift//Let'Swift//EN
BEGIN:VEVENT
UID:${new Date().toISOString()}
DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}
DTSTART:20241125
DTEND:20241126
SUMMARY:Let'Swift 2024
DESCRIPTION:
LOCATION:세종대학교 컨벤션홀
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'event.ics';
    a.click();
    URL.revokeObjectURL(url);
}
</script>