export default {
        
    LoginLogoutActon(context,payload){
        context.commit('loginLogoutMutation',payload)
    }
}