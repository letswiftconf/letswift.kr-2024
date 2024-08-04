<template>
    <div class="flex justify-center space-x-8 sm:space-x-12">
        <div v-for="social in socials" :key="social.name">
            <a :href="social.url" target="_blank" class="text-themeBlue hover:text-themeBlue/70 active:text-themeBlue/50">
                <component :is="iconComponents[social.image]" fill="white" width="32" height="32"/>
            </a>
        </div>
    </div>
</template>

<!-- Script -->
<script setup>
import { MailDotRuIcon, GitHubIcon, XIcon, InstagramIcon,YouTubeIcon } from 'vue3-simple-icons'

const iconComponents = {
  MailDotRuIcon,
  GitHubIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon
}

const socials = [
    { 'name': 'Email', 'image': 'MailDotRuIcon', 'url': 'mailto:letswift.official@gmail.com' },
    { 'name': 'GitHub', 'image': 'GitHubIcon', 'url': 'https://github.com/letswiftconf' },
    { 'name': '𝕏', 'image': 'XIcon', 'url': 'https://x.com/letswiftkr' },
    { 'name': 'Instagram', 'image': 'InstagramIcon', 'url': 'https://www.instagram.com/letswiftkr' },
    { 'name': 'YouTube', 'image': 'YouTubeIcon', 'url': 'https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J' },
]
</script>