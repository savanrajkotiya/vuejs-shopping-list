import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'



Vue.use(Vuex);

const store = new Vuex.Store({
    state:{ // data
        products:[]
    },
    getters,
    mutations,
    actions
})

export default store