<template>
    <div>
        <h1 v-if="user.username">Home {{user.username}}</h1>
        <h1 v-if="!user.username">you are not logged in</h1>
    </div>
</template>

<script>

    export default {
        name:'HomeApp',
        props:['user'],
         data(){
            return{ 
            }
        },
    }

   
    
</script>

<style scoped>

</style>