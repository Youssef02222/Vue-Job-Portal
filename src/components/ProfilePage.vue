<template>
    <div>
       
            
            <companyProfile :user="user_data"  v-if="userType=='COMPANY'"/>
            <DevProfile :user="user_data" v-if="userType=='DEVELOPER'"/>
        
        
        <!-- <h1 v-if="!user.username">you are not logged in </h1> -->
                 

    </div>
</template>
<script>
import companyProfile from './Company/CompanyProfile.vue'
import DevProfile from './Developer/DevProfile.vue'
export default{
    name:'ProfilePage',
    props:['user'],
           data(){
            return{ 
              // user:this.user
              userType:localStorage.getItem('userType'),
              user_data:this.user
            }
        },
    components:{
        companyProfile,
        DevProfile,
    }
}
</script>