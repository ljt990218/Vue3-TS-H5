import { createStore } from "vuex"

export default createStore({
    state: {
        langDefault: localStorage.getItem("locaLangDefault") || 'zh-CN'
    },
    mutations: {
        setLang(state, value) {
            state.langDefault = value
        }
    },
    actions: {
        setLang(context, value) {
            context.commit('setLang', value)
        }
    },
    modules: {}
})
