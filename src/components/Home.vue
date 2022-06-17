<template>
    <div>
        <h1 v-if="user.username">Home {{user}}</h1>
        <h1 v-if="!user.username">you are not logged in  {{user}}</h1>
    </div>
</template>

<script>

    export default {
        name:'HomeApp',
        props:['user'],
       //inject: ['user'],
       
         data(){
            return{ 
              // user:this.user
            }
        },
    }

    
   
    
</script>

<style scoped>

</style>