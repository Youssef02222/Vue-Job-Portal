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
    // export default {

        
    //     name:"JobDetails",

        // setup(){
        //     let jobDetils = {
        //         id:2,
        //         name:"Frontend Developer",
        //         creation_time:"15-5-2022",
        //         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         salary:8000,
        //         job_owner:{
        //             id:4,
        //             name:"Objects",
        //             address:"Cairo",
        //         },
        //         Tags:[
        //             {
        //                 id:1,
        //                 name:"HTML5"
        //             },
        //             {
        //                 id:2,
        //                 name:"CSS3"
        //             },
        //             {
        //                 id:3,
        //                 name:"SASS"
        //             }
        //         ]
        //     }
        //     //Get Job Details From Api
        //     let id = this.$route.params.id
        //     /*axios.get(`http://127.0.0.1:8000/jobs/developer/${id}`)
        //     .then((response)=>{
        //         jobDetils.value = response.data
        //         console.log(response.data)
        //     })
        //     .catch((err)=>{
        //         console.log(err.response.data)
        //     }) */
        //     return{
        //         jobDetils
        //     }
        // },
    //}

    import axios from 'axios'
    export default {
        name:"DevJobDetails",
        data () {
                return{
                    jobDetils:{}
                }
        },
        props:['id'],
         methods : {
        getJob(){
            axios.get('jobs/developerJobs/4/').then((res)=>{
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