import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';


const store= createStore({
    state(){
        return{
            counter:2
        }
    },
    mutations:{
        addOne(state){
            state.counter= state.counter+1;
        },
        increaseByParameter(state,payload){
            alert("MUTATTION IS CHANGING STATE DATA : inside mutation")
            state.counter= state.counter+payload.value;
        }
    },
    getters:{
        finalCounter(state){
          return state.counter*11
        },
        normalizedCounter(state,getters){
            const prevCounter= getters.finalCounter;
            if(prevCounter>100)
            return 100
            else
            return prevCounter;
        }
    },
    actions:{
        incrementAction(context,payload){
            alert("COMMITING MUTATION : inside actions")
            console.log(context);
            context.commit('increaseByParameter',payload)
        }
    }
})


const app = createApp(App);

app.use(store)
app.mount('#app');
