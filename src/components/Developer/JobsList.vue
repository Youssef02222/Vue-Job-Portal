<template>
    <div class="container mt-4">
        <div class="row jobs-actions">
            <div class="col-6">
                <h4 class="header">All Jobs</h4>
                <hr>
            </div>
            <div class="col-6">
                <div class="row">
                   
                </div>
            </div>
        </div>
        <div class="jobs-list mt-4  row">
            <div class="job col-lg-5 col-xs-10 row bg-white rounded-5 m-auto mb-3" v-for="job in jobs" :key="job.id">
                <div class="job-info p-3 col-8">
                    <p class="job-title">{{job.name}}</p>
                    <p class="address" v-if="job.address != null">
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="ms-2">{{job.address}}</span>
                    </p>
                    <p class="date">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span class="ms-2">{{job.creation_time}}</span>
                    </p>
                    <p class="status">
                        <span :class="job.status">{{job.status}}</span>
                    </p>
                </div>
                <div class="job-actions col-4 border-start">
                    <router-link :to="`/home/${job.id}/dev-job-details`" class="show btn display-block w-100">Show Details</router-link>
                    <button @click="devApply(job.id)" class="apply btn display-block w-100">Apply For Job</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {  ref } from '@vue/reactivity'
import axios from 'axios'
    export default {
        name:"DevJobList",
       components: {
        //Dropdown,
        
        },
        data() {
            return{
                    jobs:[]
            }
        },
        created(){
                axios.get("jobs/developer/dev-jobs/")
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
            
             
            //Get All Jobs From Api
          
            return{
            
                value, 
                keyWord
                }
        },
        methods: {

                devApply(id){
               
                axios.post('jobs/developer/dev-jobs/'+id+'/apply/').then((res)=>{
                console.log("data",res.data)
                console.log('apply developer fun')
            }).catch(err=>{
            console.log(err)
        })
        },
            // filteration(list){
            //     if(this.selectedCities != null){
            //         list =  list.filter((l)=>{
            //             return this.selectedCities.value == l.address
            //         })
            //     }
            //     return list
                
            // },
     
            // onChange(event) {
                
            //         this.selectedCities = event.value
            //         console.log(event.value)
                
            // }

        },
       
    }
// import { reactive, ref } from '@vue/reactivity'
// import Dropdown from 'primevue/dropdown';

    // export default {
    //     name:"JobsList",
    //    components: {Dropdown},
    //     setup(){
    //         let value = ref()
    //         let selectedCities = ref()
    //         let keyWord = ref('')
    //         let jobsList = ref([
    //             {
    //                 id:1,
    //                 name:"Frontend Developer",
    //                 address:"Cairo",
    //                 creation_time:"15-5-1999",
    //                 status:"OPEN"
    //             },
    //             {
    //                 id:2,
    //                 name:"DevOps Developer",
    //                 address:"Alex",
    //                 creation_time:"15-5-1999",
    //                 status:"OPEN"
    //             },
    //             {
    //                 id:1,
    //                 name:"Frontend Developer",
    //                 address:"Alex",
    //                 creation_time:"15-5-1999",
    //                 status:"OPEN"
    //             },
    //             {
    //                 id:2,
    //                 name:"DevOps Developer",
    //                 address:"Kafr Eldawar",
    //                 creation_time:"15-5-1999",
    //                 status:"OPEN"
    //             }
    //         ])
    //         let cities = reactive([
    //             {
    //                 id: 1,
    //                 name: "Cairo",
    //                 value: "Cairo"
    //             },
    //             {
    //                 id: 2,
    //                 name: "Alex",
    //                 value: "Alex"
    //             },
    //         ])
             
    //         //Get All Jobs From Api
    //         /*axios.get("http://127.0.0.1:8000/jobs/developer")
    //         .then((response)=>{
    //             jobsList.value = response.data
    //             console.log(response.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err.response.data)
    //         }) */
    //         return{
    //             jobsList,
    //             selectedCities,
    //             cities,
    //             value, 
    //             keyWord
    //             }
    //     },
    //     methods: {
    //         filteration(list){
    //             if(this.selectedCities != null){
    //                 list =  list.filter((l)=>{
    //                     return this.selectedCities.value == l.address
    //                 })
    //             }
    //             return list
                
    //         },
    //         search(list){
    //             if(this.keyWord != ''){
    //                 list =  list.filter((l)=>{
    //                     return l.name.startsWith(this.keyWord)
    //                 })
    //             }
    //              return list
    //         },
    //         onChange(event) {
                
    //                 this.selectedCities = event.value
    //                 console.log(event.value)
                
    //         }
    //     },
       
    // }
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
        margin-top: 25%;
        margin-bottom: 2px;
    }
    .apply{
        background-color: #3DB588;
        color:#fff
    }
</style>