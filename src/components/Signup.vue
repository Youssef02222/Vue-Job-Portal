<template>
  <div>
    <section class="vh-100" style="background-color: #eee;">

      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <button type="button" class="btn btn-success mx-5"
                      @click="isDeveloper = 'yes', type = 'DEVELOPER'">Developer</button><button type="button"
                      class="btn btn-success" @click="isDeveloper = 'no', type = 'COMPANY'">Company</button>
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" v-if="isDeveloper=='yes'">Developer Sign up </p>
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" v-if="isDeveloper=='no'">Company Sign up </p>

                    <form class="mx-1 mx-md-4" @submit.prevent="handleSubmit">
                      <div v-if="error !== '12'" class="alert alert-danger" role="alert">
                        invaild data {{ error }}
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="username" class="form-control" required />
                          <label class="form-label" for="form3Example1c">Username</label>
                        </div>
                      </div>

                      <div v-if="isDeveloper === 'yes'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example2c" v-model="firstname" class="form-control" required />
                          <label class="form-label" for="form3Example1c">firstname</label>
                        </div>
                      </div>

                      <div v-if="isDeveloper === 'no'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example12c" v-model="company_name" class="form-control" required />
                          <label class="form-label" for="form3Example1c">Company Name</label>
                        </div>
                      </div>

                      <div v-if="isDeveloper === 'no'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example0c" v-model="address" class="form-control" required />
                          <label class="form-label" for="form3Example1c">Company Address</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" v-model="email" class="form-control" required />
                          <label class="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" v-model="password" class="form-control" required />
                          <label class="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control" v-model="confirm_password"
                            required />
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div v-if="isDeveloper === 'yes'" class=" d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="file" id="file"/>
                          <label class="form-label" for="form3Example4cd">Upload CV</label>
                        </div>
                      </div>



                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg" @click="handleSubmit">Register</button>
                      </div>

                    </form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample image">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignupApp',
  data() {
    return {
      isDeveloper:'yes',
      company_name:'',
      address:'',
      username: '',
      firstname:'',
      password: '',
      confirm_password: '',
      email: '',
      cv: '',
      file: '',
      error: '12',
      type: '',
      urlType:''
    }
  },
  methods: {
    handleSubmit() {
      let formData = new FormData();
      let file = document.querySelector('#file');
      if(this.type=='DEVELOPER'){
        formData.append("cv", file.files[0]);
        formData.append('username',this.username);
        formData.append('first_name',this.firstname);
        formData.append('password',this.password);
        formData.append('password_confirm',this.confirm_password);
        formData.append('email',this.email);
        formData.append('user_type',this.type);
        this.urlType='developer'
      }
      if(this.type=='COMPANY'){
        formData.append('username',this.username);
        formData.append('company_name',this.company_name);
        formData.append('password',this.password);
        formData.append('password_confirm',this.confirm_password);
        formData.append('email',this.email);
        formData.append('address',this.address);
        formData.append('user_type',this.type);
        this.urlType='company'
      }


      

      axios.post('accounts/'+this.urlType+'_signup/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(
          res => {
            console.log('SUCCESS!!');
            console.log(this.type);

            console.log(res)
            this.$router.push('./login');
          }
      ).catch((err) => {
            this.error = 'please try again'
            console.log('FAILURE!!' + '' + err);
          });
    },
  }
}
</script>

<style scoped>
</style>