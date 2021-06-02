
import {createStore} from 'vuex'
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootgetters from './getters.js'
import counterModule from './modules/counter/index.js'
//main module
const store= createStore({
    modules:{
        numbers: counterModule
  },
    state(){
        return{
            
            isLogedIn:false
        }
    },
    mutations:rootMutations,
    getters:rootgetters,
    actions:rootActions
})


export default store;