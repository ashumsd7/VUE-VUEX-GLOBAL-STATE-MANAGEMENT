export default {
    finalCounter(state){
        return state.counter*11
      },
      normalizedCounter(state,getters){
          const prevCounter= getters.finalCounter;
          if(prevCounter>100)
          return 100
          else
          return prevCounter;
      },
}