
import counterMutations from './mutations.js'

import counterGetters from './getters.js'

import counterActions from './actions.js'
// second store module
 const counterModule={
    state(){
        return{
            counter:2,
        }
    },
    getters:counterGetters,
    actions:counterActions,
    mutations:counterMutations
}

export default counterModule;