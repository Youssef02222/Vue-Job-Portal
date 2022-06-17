<template>
    <div>
        <div v-if="user.id">
            
            <!-- <ComJobListVue v-if="userType=='COMPANY'"/> -->
            <ComJobDetails/>
        </div>
        
        <h1 v-if="!user.username">you are not logged in  {{user}}</h1>
    </div>
</template>

<script>
// import ComJobListVue from './Company/ComJobList.vue'
import ComJobDetails from './Company/ComJobDetails.vue'
undefined 
    export default {
        name:'HomeApp',
        props:['user'],
       //inject: ['user'],
       
         data(){
            return{ 
              // user:this.user
              userType:localStorage.getItem('userType')
            }
        },
        components :{
    // ComJobListVue,
    ComJobDetails,
    
}
    }

    
   
    
</script>

<style scoped>

</style>