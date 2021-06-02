export default {
      
    loginLogoutMutation(state,payload){
        state.isLogedIn= payload.status;
    }
}