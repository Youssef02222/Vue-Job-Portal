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
            let id=localStorage.getItem('id')
            if(id){
               const response=await axios.get('profile/view/'+id)
            console.log(response)
            this.user=response.data
            }
           
        },


        
}
</script>

<style>

</style>
