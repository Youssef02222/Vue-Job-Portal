<template>
<div>
    <h1>one job</h1>
    {{job}}
</div>
</template>

<script>
import {getApi} from '../../axios-api'
export default {
    name : 'JobDetails',
    data (){
        return {
            job:{}
        }
    },
    methods : {
        getJob(){
            getApi.get('company-jobs/4/').then((res)=>{
                console.log("data",res.data)
                this.job=res.data
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
<style>
</style>