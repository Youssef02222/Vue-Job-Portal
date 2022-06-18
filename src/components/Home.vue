<template>
    <div>
       
            
            <ComJobListVue v-if="userType=='COMPANY'"/>
            <DevJobList  v-if="userType=='DEVELOPER'"/>
        
        
        <h1 v-if="!user.username">you are not logged in </h1>
                 

    </div>
</template>

<script>
import ComJobListVue from './Company/ComJobList.vue'
import DevJobList from './Developer/JobsList.vue'

    export default {
        name:'HomeApp',
        props:['user'],
       
         data(){
            return{ 
              // user:this.user
              userType:localStorage.getItem('userType')
            }
        },
        components :{
    ComJobListVue,
    DevJobList,            }
       
       }
        
  
    

    
   
    
</script>

<style scoped>

</style>