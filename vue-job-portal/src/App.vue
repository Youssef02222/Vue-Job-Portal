<template>
  <!-- <company-profile></company-profile>
  <DeveloperProfile/> -->
  <CompanyJobDetails></CompanyJobDetails>
  <CompanyWall></CompanyWall>
</template>

<script>

// import CompanyProfile from "@/components/Profiles/CompanyProfile";
// import DeveloperProfile from "./components/Profiles/DeveloperProfile.vue";
import CompanyJobDetails from './components/Wall/CompanyJobDetails.vue'
import CompanyWall from './components/Wall/CompanyWall.vue'
export default {
  name: 'App',
  components: {
    CompanyJobDetails,
    CompanyWall,
    // CompanyProfile,
    // DeveloperProfile
  },
  
}
</script>

<style>

</style>
