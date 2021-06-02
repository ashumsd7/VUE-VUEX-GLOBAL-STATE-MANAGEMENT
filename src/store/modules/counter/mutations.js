export default {
    addOne(state){
        state.counter= state.counter+1;
    },
    increaseByParameter(state,payload){
        console.log("MUTATTION IS CHANGING STATE DATA : inside mutation")
        state.counter= state.counter+payload.value;
    },
}