<template>
    <div>
        <div class="container emp-profile" v-if="update == 'no'">
            <form method="post">
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
                                Name : {{ user.username }}
                            </h5>
                            <h6>
                                Developer
                            </h6>
                            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">Info</a>
                                </li>

                            </ul>
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
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{{ user.id }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{{ user.username }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{{ user.email }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Skills</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{{ user.tags }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br />
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div v-if="update == 'yes'" class="container">
        <div v-if="error!='10'" class="alert alert-danger">
    {{error}}
</div>
<keep-alive>
            <form @submit.prevent="handleSubmit">
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

                    <input type="email" id="form6Example5"    v-model="email" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>

                <!-- Number input -->
                <!-- <div class="form-outline mb-4">
                    <input type="number" id="form6Example6" class="form-control" v-model="phone" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div> -->

                <!-- Submit button -->
                <button type="submit" @click="handleUpdate" class="btn btn-dark btn-block mb-4">Submit</button>

            </form>
            </keep-alive>

        </div>













    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProfileApp',
    props: ['user'],
    data() {
        return {
            update: 'no',
            username: this.user.username,
            firstname: this.user.first_name,
            email:this.user.email,
            password: '',
            confirm_password: '',
            phnoe: '',
            error:'10'


        }
    },
    created() {
        //console.log(this.update)
    },
    methods: {
        handleUpdate() {
           let id =localStorage.getItem('id')

         let   data = {
                username: this.username,
                first_name: this.firstname,
                password: this.password,
                password_confirm: this.confirm_password,
                email: this.email,
                user_type: this.type,
                cv: this.image
            }

            axios.patch('profile/dev/'+id+'/update/', data,
            ).then(
                res => {

                    console.log('SUCCESS!!');
                    console.log(this.type);

                    console.log(res)
                    this.$router.push('./profile');
                }

            )
                .catch((err) => {
                    this.error = 'please try again'
                    console.log('FAILURE!!' + '' + err);
                });

//    if(this.error=='10')
//                 {
//                      this.$router.push('./profile');
//                 }
 this.$router.push('./home');


        }

    }




}
</script>

<style scoped>
</style>