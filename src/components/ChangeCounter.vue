<template>
    <button @click="ADD1"> Add 1</button>
</template>

<script>
export default {
    methods: {
        ADD1(){
            // this.$store.state.counter++;
            //call mutation
            this.$store.commit('addOne')
        }
    },
}
</script>