<template>
  <base-container title="Vuex"></base-container>
  <h2>{{counter}} </h2>
  <change-counter></change-counter>
  <button @click="increment">ADD 1*</button>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter
  },
  computed:{
    counter(){
      // return this.$store.state.counter;
      // return this.$store.getters.finalCounter;  //just point it dont call it finalCounter()
      return this.$store.getters.normalizedCounter;
    }
  },
  methods: {
    increment(){
      // this.$store.commit('increaseByParameter',{value:2})
      alert("DISPATCHING ACTION : inside components")
      this.$store.dispatch('incrementAction',{value:3})
    }
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
</style>