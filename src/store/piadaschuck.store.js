import Vue from 'vue'
import store from '@/config/store'
import PiadasChuckService from '@/services/piadaschuck.service'

const state = {
    piada: {
        data: [],
        error: null
    }
}

const getters = {}

const actions = {
    async fetchPiada( {commit} ) {
        try {
            const piada = await PiadasChuckService.getPiadas()
            commit('updatePiada', piada)
        } catch ( error ) {
            commit('errorPiada', error)
        }
    }
}

const mutations = {
    updatePiada (state, piada) {
        const updateData = { data: piada, error: null }
        Vue.set( state, 'piada', updateData)
    },
    errorPiada (state, error) {
        const updateData = { data: [], error: error}
        Vue.set( state, 'piada', updateData )
    }
}

const module = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

store.registerModule('piadas', module)
export default module
