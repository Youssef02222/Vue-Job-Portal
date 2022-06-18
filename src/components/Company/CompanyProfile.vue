<template>
    <div>
        <div class="container emp-profile" v-if="update == 'no'">


            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                            alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                        <h5>
                            Username : {{ user.company_name }}
                        </h5>
                        <h5>
                            Company : {{ user.company_name }}
                        </h5>
                         <h5>
                            Address : {{ user.address }}
                        </h5>
                        <h6>
                            type : {{ user.user_type }}
                        </h6>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                    aria-controls="home" aria-selected="true">History</a>
                            </li>
                        </ul>
                        {{ user.history }}
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="button" @click="update = 'yes'" class="btn btn-dark" name="btnAddMore"
                        value="Edit Profile" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">



                    </div>
                </div>
            </div>
        </div>


<div v-if="error!='10'" class="alert alert-danger">
    {{error}}
</div>
        <div v-if="update=='yes'">

         <form >
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example1" v-model="username" class="form-control" />
                            <label class="form-label" for="form6Example1">Username</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example2" v-model="firstname" class="form-control" />
                            <label class="form-label" for="form6Example2">First_name</label>
                        </div>
                    </div>
                </div>


 <div class="form-outline mb-4">
                    <input type="text" v-model="address" id="form6Example3" class="form-control" required/>
                    <label class="form-label" for="form6Example3">Address</label>
                </div>

                <!-- Text input -->
                <div class="form-outline mb-4">
                    <input type="password" v-model="password" id="form6Example3" class="form-control" required/>
                    <label class="form-label" for="form6Example3">Password</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" v-model="confirm_password" id="form6Example3" class="form-control" required/>
                    <label class="form-label" for="form6Example3">Confirm password</label>
                </div>



                <!-- Email input -->
                <div class="form-outline mb-4">

                    <input type="email" id="form6Example5" v-model="email" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>

                <!-- Number input -->
                <div class="form-outline mb-4">
                    <input type="textarea" id="form6Example6" class="form-control" v-model="history" />
                    <label class="form-label" for="form6Example6">History</label>
                </div>

                <!-- Submit button -->
                <button type="submit" @submit.prevent="handleSubmit"  class="btn btn-dark btn-block mb-4">Submit</button>

            </form>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "companyProfile",
   
    data() {
        return {
           // user_info:this.user,
            update: 'no',
            username: '',
            firstname: '',
            email:'',
            password: '',
            confirm_password: '',
            history: '',
            address:'',
            error:'10',
            user:[]
            
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
    methods:{
          handleUpdate() {
           let id =localStorage.getItem('id')

         let   data = {
                username: this.username,
                first_name: this.firstname,
                password: this.password,
                password_confirm: this.confirm_password,
                email: this.email,
                address:this.address,
                history: [],
            }

            axios.patch('profile/'+id+'/update/', data,
            ).then(
                res => {

                    console.log('SUCCESS!!');
                    

                    console.log(res)
                    this.$router.push('./home');
                }

            )
                .catch((err) => {
                    this.error = "username is required"
                    console.log('FAILURE!!' + '' + err);
                });

                if(this.error=='10')
                {
                     this.$router.push('./profile-company');
                }
              
                    


        }
    }

}
</script>

<style scoped>
</style>