<template>
  <div class="container mt-4">
    <div class="header">Notifications </div>
    <div class="notifications-list mt-4  row">
      <div class="notification card col-lg-10 col-xs-10 m-auto p-3 shadow" v-for="notification in notificationsList" :key="notification.id">
        <div class="notification-message col-8">{{notification.message}}</div>
        <div class="notification-date col-2 border-start border-5 ps-3">{{notification.created_at}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NotificationsComponent",
  data(){
    return{
      notificationsList:[],
    }
  },
  async created(){
      const response=await axios.get('notifications/list/')
      this.notificationsList=response.data
  },
}
</script>

<style scoped>
.header{
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.header:after
{
  content:' ';
  display:block;
  border:2px solid #3DB588;
  max-width: 5%;
}
.notification{
  border-left: 8px solid #3DB588;
}
.notification-message{
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 18px;
}
.notification-date{
  font-size: 18px;
  background-color: #3DB588;
  color:#fff
}
</style>