<template>
    <div>
       
            
            <ComJobListVue v-if="userType=='COMPANY'"/>
            <DevJobList  v-if="userType=='DEVELOPER'"/>
        
        
        <div class="alert alert-danger" v-if="!user.id">Invalid login try again !</div>
                 

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