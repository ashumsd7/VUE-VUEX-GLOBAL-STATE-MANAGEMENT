<template>
 <base-container title="Learning Vuex"></base-container>
<base-container v-if="checkLogIn" title="Logged In">
 
   <base-container>  <h2>{{normalizedCounter}} </h2></base-container>

 <base-container><change-counter></change-counter>
  <button @click="increment({value:3})">ADD 1*</button></base-container>
</base-container>

  <base-container title="  Authentication"><user-auth ></user-auth></base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    BaseContainer,
    ChangeCounter,
    UserAuth
  },
  computed:{
    // counter(){
    //   // return this.$store.state.counter;
    //   // return this.$store.getters.finalCounter;  //just point it dont call it finalCounter()
    //   return this.$store.getters.normalizedCounter;
    // }
    ...mapGetters(['normalizedCounter','checkLogIn'])
  },
  methods: {
    // increment(){
    //   // this.$store.commit('increaseByParameter',{value:2})
    //   alert("DISPATCHING ACTION : inside components")
    //   this.$store.dispatch('incrementAction',{value:3})
    // }

    // ...mapActions(['incrementAction']) //or
      ...mapActions({
        increment: 'incrementAction'
      })
  },
  
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
h2{
  margin: auto;
  font-weight: bolder;
  font-size: 2rem;
}
button{
  font-size: 1.2rem;
  background: black;
  color: yellow;
  font-weight: bolder;
  margin: 1rem;
  padding:.3rem;
  cursor: pointer;
}
</style>