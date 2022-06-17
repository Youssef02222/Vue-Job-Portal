<template>
    <div>
        <h1 v-if="user.username">Home {{user}}</h1>
        <h1 v-if="!user.username">you are not logged in  {{user}}</h1>
        <JobsList/>
    </div>
</template>

<script>

import JobsList from './Developer/JobsList.vue'
    export default {
        name:'HomeApp',
        props:['user'],
       //inject: ['user'],
       
         data(){
            return{ 
              // user:this.user
            }
        },
        components:{
    
    JobsList
}
    }

    
   
    
</script>

<style scoped>

</style>