<template>

<div class="container">
        <div class="w-50 mt-4 m-auto card border-0 shadow-sm p-4">
            <div class="card-body ">
                <div class="job-info mt-3">
                    <p class="job-title">{{jobDetils.name}}</p>
                    <p class="address" v-if="jobDetils.job_owner.address != null">
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="ms-2">{{jobDetils.job_owner.address}}</span>
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
                    jobDetils:{}
                }
        },
        props:['id'],
         methods : {
        getJob(){
            axios.get('jobs/company/company-jobs/4/').then((res)=>{
                console.log("data",res.data)
                this.jobDetils=res.data
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
</style>