export default{
    incrementAction(context,payload){
        console.log("COMMITING MUTATION : inside actions")
        console.log(context);
        context.commit('increaseByParameter',payload)
    },
}