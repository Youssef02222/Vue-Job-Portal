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
                    <h2>Please select user type</h2>
                    <button type="button" class="btn btn-outline-dark" @click="viewCV = 'yes', type = 'DEVELOPER'">Developer</button>
                      <button type="button" class="btn btn-outline-dark mx-5" @click="viewCV = 'no', type = 'COMPANY'">Company</button>
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form class="mx-1 mx-md-4" @submit.prevent="handleSubmit">
                      <div v-if="error != '12'" class="alert alert-danger" role="alert">
                        invaild data {{ error }}
                      </div>


                      <div v-if="viewCV == 'yes'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="usernames" class="form-control" required />
                          <label class="form-label" for="form3Example1c">Username</label>
                        </div>
                      </div>

                       <div v-if="viewCV == 'yes'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="firstname" class="form-control" required />
                          <label class="form-label" for="form3Example1c">First_name</label>
                        </div>
                      </div>


                        <div v-if="viewCV == 'no'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="usernames" class="form-control" required />
                          <label class="form-label" for="form3Example1c">Company name</label>
                        </div>
                      </div>

                       <div v-if="viewCV == 'no'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="firstname" class="form-control" required />
                          <label class="form-label" for="form3Example1c">firstname</label>
                        </div>
                      </div>
                       <div v-if="viewCV == 'no'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" v-model="address" class="form-control" required />
                          <label class="form-label" for="form3Example1c">address</label>
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

                      <div v-if="viewCV == 'yes'" class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                              <!-- <label class="form-label">Upload CV</label>
                           <input type="file" @change="handleFileUpload( $event )"/>
                           <button v-on:click="submitFile()">Submit</button> -->
                           <button class="btn btn-info" @click="onPickFile">Upload cv {{file}}</button>
                           <input  type="file" style="display: none"  ref="fileInput"  @change="onFilePicked"/>
                       
                        </div>
                      </div>



                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">Register</button>
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
      viewCV: 'no',
      usernames: '',
      firstname:'',
      password: '',
      confirm_password: '',
      email: '',
      cv: '',
      error: '12',
      type: '',
       image: null,
       file:'',
       address:''
    }
  },
  methods: {
   onPickFile () {
  this.$refs.fileInput.click()
},
onFilePicked (event) {
  const files = event.target.files
  let filename = files[0].name
  this.file=filename
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    this.imageUrl = fileReader.result
  })
  fileReader.readAsDataURL(files[0])
  this.image = files[0]
},
    handleSubmit() {
      let data={}
      if(this.viewCV=='yes'){
         data = {
        username: this.usernames,
        first_name:this.firstname,
        password: this.password,
        password_confirm: this.confirm_password,
        email: this.email,
        user_type: this.type,
        cv:this.image
      }

           axios.post('accounts/developer_signup/', data,
      ).then(
        res => {

          console.log('SUCCESS!!');
          console.log(this.type);

          console.log(res)
          this.$router.push('./login');
        }

      )
        .catch((err) => {
          this.error = 'please try again'
          console.log('FAILURE!!' + '' + err);
        });



      }
      else{
         data = {
        company_name: this.usernames,
        username:this.usernames,
        address:this.address,
        first_name:this.firstname,
        password: this.password,
        password_confirm: this.confirm_password,
        email: this.email,
        user_type: this.type
      }
         axios.post('accounts/company_signup/', data,
      ).then(
        res => {

          console.log('SUCCESS!!');
          console.log(this.type);

          console.log(res)
          this.$router.push('./login');
        }

      )
        .catch((err) => {
          this.error = 'please try again'
          console.log('FAILURE!!' + '' + err);
        });





      }
    
      console.log(data);
      console.log(this.image)
   





     
    },

  }
}
</script>

<style scoped>
</style>