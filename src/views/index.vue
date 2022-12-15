<template>
    <div class="title">{{ t('home') }}</div>
    <router-link to="/about">Go to About</router-link>
</template>

<script lang="ts" setup="props">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const { t, locale } = useI18n()

const router = useRouter()
const route = useRoute()

// function changeLanguage() {
//     var l = localStorage.getItem('langDefault')
//     if (l === 'en') {
//         isCNImg.value = img_en
//         changeLang('cn')
//     }
//     if (l === 'cn') {
//         isCNImg.value = img_zh
//         changeLang('en')
//     }
// }

// // 改变语言
// const changeLang = (lang: string) => {
//     locale.value = lang
//     store.commit('setLang', lang)
//     localStorage.setItem('langDefault', lang) // 重要！下面遇到问题里解释
//     scrllIndex(showIndex.value)
// }
</script>
<style scoped lang="scss"></style>
