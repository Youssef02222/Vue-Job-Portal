<template>
    <div>
         <h1 v-if="user.UserType=='DEVELOPER'"></h1>
                 <DevJobList/>

    </div>
</template>

<script>
import DevJobList from './Developer/JobsList.vue'

    export default {
        name:'HomeApp',
        props:['user'],
       
         data(){
            return{ 
            }
        },
         components :{
         DevJobList,
    
}
    }

    
   
    
</script>

<style scoped>

</style>