<template>
  <div class="flex flex-col space-y-8">
    <Title/>
    <Events/>
    <Social/>
    <Footer/>  
  </div>
</template>

<!-- Script -->
<script setup>
import Title from './components/Title.vue'
import Events from './components/Events.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'
</script>

<!-- Style -->
<style scoped>
.bg-gradient {
  background: linear-gradient(90deg, #ff7e5f, #feb47b, #f0f, #0ff, #f00, #f0f, #0f0, #0ff, #00ff0f, #f0f0f0, #f00fff, #00f, #ff7e5f);
}
.text-blur-bg {
  position: relative;
  display: inline-block;
  font-size: 6rem;
  font-weight: bold;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.text-blur-bg::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  filter: blur(10px);
  z-index: -1;
}
</style>