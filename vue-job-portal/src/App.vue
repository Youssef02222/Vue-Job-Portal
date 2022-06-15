<template>
  <company-profile></company-profile>
  <DeveloperProfile/>
</template>

<script>

import CompanyProfile from "@/components/Profiles/CompanyProfile";
import DeveloperProfile from "./components/Profiles/DeveloperProfile.vue";
export default {
  name: 'App',
  components: {

    CompanyProfile,
    DeveloperProfile
  },
  
}
</script>

<style>

</style>
