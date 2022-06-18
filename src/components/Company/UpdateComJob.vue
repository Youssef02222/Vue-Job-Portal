<template>
<div class="container mt-3">
    <form @submit.prevent="handleSubmit">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example1" v-model="job_name" class="form-control" />
                            <label class="form-label" for="form6Example1">Job name</label>
                        </div>
                    </div>
                    <br>
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example2" v-model="description" class="form-control" />
                            <label class="form-label" for="form6Example2">Description</label>
                        </div>
                    </div>
                </div>   

                <div class="col">
                            <!-- <select v-model="selected" multiple>
                            <option v-for="tag in tags" :key="tag.id" value="s" >{{tag.name}}</option>
        
                             </select> -->
        <MultiSelect @change="selected_tags()" v-model="selected" :options="tags" optionLabel="name" placeholder="Select tags" />

<br>
  
      </div>
                <button type="button" @click="handleUpdate" class="btn btn-dark btn-block mb-4"> Update</button>

            </form>
          {{tags_id}}
</div>
</template>

<script>
import axios from 'axios';
//import MultiSelect from 'primevue/multiselect';
// import Multiselect from 'vue-multiselect'

export default{
    name:'UpdateJob',
    components:{
      //  MultiSelect,
    },
    data(){
            

        return{
            selected:null,
            jobDetails:{name:'',description:''},
            job_name:'',
            description:'',
            tags_id:[],
                        
        }

    },
    props:['id'],
    methods:{
        selected_tags(){
           
            this.tags_id = this.selected.map((obj) => obj.id);
            console.log(this.tags_id); 
        },
       
     

        handleUpdate(){
            let data ={
                name:this.job_name,
                description:this.description,
                Tags:this.tags_id,

            }
            let id=this.$route.params.id

             axios.put('jobs/company/company-jobs/'+id+'/', data,
            ).then(
                res => {
                    console.log('SUCCESS!!');
                    console.log(res)
                    this.$router.push('./home');
                }
            )
                .catch((err) => {
                    this.error = 'please try again'
                    console.log('FAILURE!!' + '' + err);
                });
 this.$router.push('./home');
        },
             getJob(){
            let id=this.$route.params.id
            console.log("id bla : ",id)
            axios.get('jobs/company/company-jobs/'+id+'/').then((res)=>{
                console.log("data",res.data)
                this.jobDetails=res.data
                this.job_name=this.jobDetails.name
                this.description=this.jobDetails.description
                
            }).catch(err=>{
            console.log(err)
        })
        },
               getTags(){
            axios.get('tags/list/').then((res)=>{
                console.log("tags data",res.data)
               this.tags=res.data
                
            }).catch(err=>{
            console.log(err)
        })
        },
    },
       mounted (){
        this.getJob()
        this.getTags()
       
    },


}

</script>

<style></style>