<template>
  <div class="flex flex-col">
    <Header class="fixed top-0 left-0 w-full h-20"/>
    <div class="pt-28 flex flex-col space-y-8">
      <!-- <div class="flex-grow h-16 bg-blue-500"></div> -->
      <router-view></router-view>
      <Footer/>  
    </div>
  </div>
</template>

<!-- Script -->
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
