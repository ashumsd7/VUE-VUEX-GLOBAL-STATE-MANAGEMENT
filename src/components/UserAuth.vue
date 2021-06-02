<template>
    <button @click="LoginLogoutActon({status:true})" v-if="!checkLogIn">Login</button>
     <button  @click="LoginLogoutActon({status:false})" v-else>Logout</button>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters(['checkLogIn'])
    },
    methods: {
        ...mapActions(['LoginLogoutActon'])
    },
}
</script>