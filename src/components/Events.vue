<template>
    <div>
        <h2 class="font-semibold text-xl text-slate-300">이전 행사 다시 보기</h2>
        <div class="py-6 flex justify-center">
            <div class="max-w-[1280px] grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                <div v-for="event in events" class="w-64 h-44 bg-slate-900 rounded-xl hover:scale-105 transition duration-500">
                    <a :href="event.url" target="_blank">
                        <div class="relative w-full h-full overflow-hidden rounded-xl group">
                            <img :src="event.image" class="p-4 w-full h-full object-contain blur-md group-hover:blur-none transition duration-500" :class="event.class"/>
                            <div class=" absolute inset-0 w-full h-full group-hover:invisible transition duration-500" :class="event.overlay_class"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-slate-100 drop-shadow-xl font-bold text-5xl group-hover:invisible transition duration-500">{{ event.year }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import image2023 from '../assets/2023.png'
import image2022 from '../assets/2022.png'
import image2020 from '../assets/2020.png'
import image2019 from '../assets/2019.png'
import image2018 from '../assets/2018.png'
import image2017 from '../assets/2017.png'
import image2016 from '../assets/2016.png'

const events = [
{ 'year': 2023, 'url': 'https://letswift.kr/2023', image: image2023, overlay_class:'bg-black/30', class: '', text_class: '' },
{ 'year': 2022, 'url': 'https://letswift.kr/2022', image: image2022, overlay_class:'bg-black/30', class: '', text_class: '' },
{ 'year': 2020, 'url': 'https://letswift.kr/2020', image: image2020, overlay_class:'bg-black/50', class: ' bg-white', text_class: '' },
{ 'year': 2019, 'url': 'https://letswift.kr/2019', image: image2019, overlay_class:'bg-black/30', class: '', text_class: '' },
{ 'year': 2018, 'url': 'https://letswift.kr/2018', image: image2018, overlay_class:'bg-black/30', class: '', text_class: '' },
{ 'year': 2017, 'url': 'https://letswift.kr/2017', image: image2017, overlay_class:'bg-black/50', class: ' bg-white', text_class: '' },
{ 'year': 2016, 'url': 'https://letswift.kr/2016', image: image2016, overlay_class:'bg-black/50', class: ' bg-white', text_class: '' },
]
</script>