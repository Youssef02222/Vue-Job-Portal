<template>
owner: {{owner}}
<div class="container">
        <div class="w-50 mt-4 m-auto card border-0 shadow-sm p-4">
            <div class="card-body ">
                <div class="job-info mt-3">
                    <p class="job-title">{{jobDetils.name}}</p>
                    <p class="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="ms-2">{{owner.company_name}}</span>
                    </p>
                    <p class="date">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span class="ms-2">{{jobDetils.creation_time}}</span>
                    </p>
                </div>
                <div class="description mt-4">
                    <p class="job-title">Description</p>
                    <p class="desc-content">{{jobDetils.description}}</p>
                </div>
                <div class="skills">
                    <p class="job-title">Required Skills</p>
                    <span v-for="tag in jobDetils.Tags" :key="tag.id" class="skill">
                        {{tag.name}}
                    </span>
                </div>
                 <div class="skills">
                    <p class="job-title">Applied developers</p>
                    <div v-for="dev in jobDetils.applied_developers" :key="dev.id" >
                        {{dev.id}} 
                        <button @click="acceptDev(dev.id)" class="btn">Accept developer</button>
                    </div>
               </div>
                  <div class="skills">
                    <p class="job-title">Accepted Developer data</p>
                    <ul>
                        <li>{{accepted_developer.username}}</li>
                        <li>{{accepted_developer.email}}</li>
                        <li>{{accepted_developer.first_name}}</li>
                    </ul>
                </div>
                <div class="skills">
                    <p class="job-title">Status</p>
                       <p class="status">
                        <span :class="OPEN">{{jobDetils.status}}</span>
                    </p>
                
            </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

    export default {
        name:"ComJobDetails",
        data () {
                return{
                    jobDetils:{},
                    owner:{},
                    accepted_developer:{}
                    
                }
        },
        props:['id'],
         methods : {
        getJob(){
            axios.get('jobs/company/company-jobs/4/').then((res)=>{
                console.log("data",res.data)
                this.jobDetils=res.data
                this.owner=this.jobDetils.job_owner
                this.accepted_developer=this.jobDetils.developer
            }).catch(err=>{
            console.log(err)
        })
        },
        acceptDev(accepted_id){
                console.log(accepted_id)
                axios.post('jobs/company/company-jobs/4/accept/',{id:21,}).then((res)=>{
                console.log("data",res.data)
                console.log('accept developer fun')
            }).catch(err=>{
            console.log(err)
        })
        }
    },
    mounted (){
        this.getJob()
    }
  
    }
</script>

<style scoped>
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
    .desc-content{
        color:#9C9E9D;
        font-size: 14px;
    }
    .skill{
        background-color: #EDC9C9;
        color:#fff;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 12px;
        margin-left: 5px;
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
</style>