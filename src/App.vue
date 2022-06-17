<template>

<NavApp :user="user"/> 

<h1></h1>
 <router-view :user="user"/>
 
 <!-- <div class="container">
 <container/>

 </div> -->
</template>

<script>


//import container from './components/Container.vue'
import NavApp from './components/Nav.vue'
import axios from 'axios'

export default {

        name: 'App',
      provide(){
        return{
          user:this.user
        }
      },
        components: {
          NavApp
          // container,  
      },  
      data(){
            return{
                user:[],
            }
        },
         async created(){
            let userType=localStorage.getItem('userType')
            let id=localStorage.getItem('id')
          // let id=this.$route.params.id
            if(userType=='DEVELOPER'){

                const response=await axios.get('profile/dev/'+id+'/details/')
                console.log(response.data)
                this.user=response.data
          //  console.log(this.user.first_name)
            }
            else if(userType=='COMPANY'){
                 const response=await axios.get('profile/'+id+'/details/')
                 console.log(response.data)
                 this.user=response.data
            }
           
        },


        
}
</script>

<style>

</style>
