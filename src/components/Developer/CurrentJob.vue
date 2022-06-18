<template>
    <div class="container">
        <div class="w-50 mt-4 m-auto card border-0 shadow-sm p-4">
       <div v-show="error !== null">
         <h3 >   You don't have any job currently </h3>
       </div>
       <div v-if="error == null">
            <div class="card-body" >
                <div class="job-info mt-3">
                    <p class="job-title" v-if="jobDetils.name !== null">{{jobDetils.name}}</p>
                    <p class="address" v-if="owner.address !== null">
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="ms-2">{{owner.address}}</span>
                    </p>
                    <p class="date">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span class="ms-2" v-if="jobDetils.creation_time !== null">{{jobDetils.creation_time}}</span>
                    </p>
                </div>
                <div class="description mt-4">
                    <p v-if="jobDetils.description !== null" class="job-title">Description</p>
                    <p class="desc-content" v-if="jobDetils.description !== null">{{jobDetils.description}}</p>
                </div>
                <div  class="skills">
                    <p class="job-title">Required Skills</p>
                    <span v-for="tag in jobDetils.Tags" :key="tag.id" class="skill">
                        {{tag.name}}
                    </span>
                    <br>
                 <p class="job-title">Status</p>

                    <p class="desc-content" v-if="jobDetils.status !== null">{{jobDetils.status}}</p>
                </div>
                <div v-if="jobDetils.name !==null">
                <button @click="finishJob()" class="btn btn-success mt-3" >Finish Job</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name:"CurrentJob",
        data () {
                return{
                    jobDetils:{},
                    owner:{},
                    error:{}
                }
        },
        props:['id'],
         methods : {
        getJob(){
            axios.get('jobs/developer/dev-jobs/current-job/').then((res)=>{
                console.log("data of current job",res.data)
                this.jobDetils=res.data
                this.owner=this.jobDetils.job_owner
                this.error=null

            }).catch(err=>{
            console.log(err)
            this.error=err.response.data.detail
        })
        },
            finishJob(){
            console.log(this.jobDetils.id)
                axios.post('jobs/developer/dev-jobs/'+this.jobDetils.id+'/finish/',).then((res)=>{
                console.log("data",res.data)
                console.log('finish job fun')
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
    h3{
        color :red;
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