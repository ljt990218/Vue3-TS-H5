<template>
    <div class="title">{{ t('about') }}</div>
    <router-link to="/">Go to Home</router-link>
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
</script>
<style scoped lang="scss"></style>
