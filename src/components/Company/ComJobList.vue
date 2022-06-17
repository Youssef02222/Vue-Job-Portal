<template>
   <table class="table table-striped">
  <thead>
    <tr >
      <th scope="col">Job name</th>
      <th scope="col">Status</th>
      <th scope="col">Description</th>
      <th scope="col">Accepted developer</th>
      <th scope="col">Modification time</th>
      <th scope="col">Creation time</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="job in jobs" :key="job.id">
        
      <th>{{job.name}}</th>  
      <th>{{job.status}}</th>
      <td>{{job.description}}</td>
      <td>{{job.developer}}</td>
      <td>{{job.modification_time}}</td>
      <td>{{job.creation_time}}</td>
      <td>
        <router-link :to="`/home/${job.id}/job-details`" class="show btn display-block ">Show Details</router-link>
        <router-link :to="`/job/${job.id}`" class="apply btn display-block ">Update</router-link>
        <router-link :to="`/job/${job.id}`" class="btn btn-danger  display-block ">Show Details</router-link>


      </td>
    </tr>
   
  </tbody>
</table>
</template>

<script>
import {  ref } from '@vue/reactivity'
// import Dropdown from 'primevue/dropdown';
import axios from 'axios'
//import { onMounted } from '@vue/runtime-core'
    export default {
        name:"ComJobList",
       components: {
        //Dropdown,
        
        },
        data() {
            return{
                    jobs:[]
            }
        },
        created(){
                axios.get("jobs/company/company-jobs/")
            .then((response)=>{
                this.jobs = response.data
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err.response.data)
            }) 
        },
        setup(){
            let value = ref()
            let keyWord = ref('')
            
             
          
            return{
            
                value, 
                keyWord
                }
        },
        methods: {
            filteration(list){
                if(this.selectedCities != null){
                    list =  list.filter((l)=>{
                        return this.selectedCities.value == l.address
                    })
                }
                return list
                
            },
     
            onChange(event) {
                
                    this.selectedCities = event.value
                    console.log(event.value)
                
            }
        },
       
    }
</script>

<style scoped>
    .header{
        color: #3DB588;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    hr{
        background-color: #3DB588;
        width: 8%;
        height: -1px;
        border: none;
        height: 2px;
        margin-top: -5px;
    }
    .p-dropdown	{
        width:100%;
        border:none
    }
    .job-title{
        color:#2E4765;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
    }
    .address, .date{
        font-size: 14px;
        color:#2E4765;
        margin-bottom: 2px;
    }
    .address i, .date i {
        color:#2E4765;
        opacity: 0.4;
    }
    .status{
        margin-top:12px;
        font-size: 12px;
    }
    .status span{
        padding: 3px 6px;
    }
    .progress{
        background-color: rgba(255,193,7, 0.3);
        color:rgb(255,193,7);
    }
    .OPEN{
        background-color: rgba(25,135,84, 0.3);
        color:rgb(25,135,84);
    }
    .actions button{
        border: none;
    }
    .show{
        background-color: #EDC9C9;
        color:#fff;
        
        margin: 2px;
    }
    .apply{
        background-color: #3DB588;
        color:#fff;
        margin: 3px;
    }
</style>