import { createI18n } from 'vue-i18n'
import store from '@/store'
import cn from './cn'
import en from './en'

// 语言库
const messages = {
    cn: cn,
    en: en,
}

// 默认语言
let langDefault = ''
var locaLangDefault = localStorage.getItem('langDefault')
if (locaLangDefault) {
    langDefault = locaLangDefault
    store.commit('setLang', langDefault)
} else {
    langDefault = 'cn'
    localStorage.setItem('langDefault', 'cn')
    store.commit('setLang', langDefault)
}

const i18n = createI18n({
    legacy: false,
    locale: langDefault, //默认显示的语言
    messages,
})

export default i18n // 将i18n暴露出去，在main.js中引入挂载
