<template>
  <div class="flex flex-col space-y-8">
    <router-view></router-view>
    <Footer/>  
  </div>
</template>

<!-- Script -->
<script setup>
import Footer from './components/Footer.vue'
</script>
