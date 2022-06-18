<template>
    <div>
        <div v-if="user.id">
            
            <ComJobListVue v-if="userType=='COMPANY'"/>
            <!-- <ComJobDetails/> -->
        </div>
        
        <h1 v-if="!user.username">you are not logged in  {{user}}</h1>
         <h1 v-if="user.UserType=='DEVELOPER'"></h1>
                 <DevJobList/>

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