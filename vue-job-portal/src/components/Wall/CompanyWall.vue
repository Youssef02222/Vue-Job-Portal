<template>
<div>
    <h1>My jobs</h1>
    <!-- <div v-for ="job in getJobs" :key="job.id">
       <h1>{{job.name}}</h1>  
        <h2>Job tags</h2>
        <div v-for ="tag in job.Tags" :key="tag.id">
        {{tag.name}}
        </div>
        <h2>Applied developers</h2>
          <div v-for ="dev in job.applied_developers" :key="dev.id">
        
        </div>
    </div> -->
    {{getJobs}}
    <hr>
</div>
<hr>
</template>
<script>
import {getApi} from '../../axios-api'
export default {
    name : 'AllJobs',
    data (){
        return {
            getJobs:[],
        }
    },
    created(){
        getApi.get('company-jobs/').then(
            response => {
                console.log('acceess')
                this.getJobs = response.data
            }
        ).catch(err=>{
            console.log(err)
        })
    }

}
</script>
<style>

</style>