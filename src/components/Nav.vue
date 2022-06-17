<template>
    <div>
 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav" v-if="!user.username">
      <li class="nav-item">
        <router-link to="/home" class="nav-link active mx-4" href="#">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link mx-4" href="#">Login</router-link>

      </li>
      <li class="nav-item">
         <router-link to="/signup" class="nav-link mx-4" href="#">Signup</router-link>
      </li>
       <li class="nav-item">
         <router-link to="/profile" class="nav-link mx-4" href="#">Profile</router-link>
      </li>
    </ul>

     <ul class="navbar-nav" v-if="user.username">
      <li class="nav-item">
        <router-link to="/home" class="nav-link active mx-4" href="#">Home</router-link>
      </li>

       <li class="nav-item">
         <router-link to="/profile" class="nav-link mx-4" href="#">Profile</router-link>
      </li>

      <li class="nav-item">
        <a href="/login" @click="handleClick" class="nav-link mx-4" >Logout</a>
      </li>

    

      
    </ul>


  </div>
</nav> 
    </div>
</template>

<script>


    export default {
        name:'NavApp',
        props:['user'],
        
        methods:{
            handleClick(){
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                localStorage.removeItem('userType')
                this.$router.push('/home');
              
            }
        },
       

    }
</script>

<style scoped>

</style>