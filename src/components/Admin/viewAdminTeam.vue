<template>
  <div class="team">
    <h1 class="white--text">Team</h1>
    <v-container class="my-3">
      <v-layout row wrap>
        <v-flex sm6 md4 lg3 v-for="(x,i) in adminData" :key="i">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="150px" color="grey lighten-4">
                <img src="../../imgs/man-2_icon-icons.com_55041.png" alt="avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{x.name}}</div>
              <div class="grey--text">{{x.nationalID}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="gray">
                <v-icon small left>message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      adminData:[],img:''
    }
  },created(){
    axios.get(`/admin/teamID/${this.$route.params.teamNID}`)
    .then(res =>{
      const data = res.data.result;
      for (let k in data) {
        const admin = data[k];
        this.adminData.push(admin);
      }
    }).then(()=> console.log(this.adminData))
  }
};
</script>
<style scoped>
</style>
