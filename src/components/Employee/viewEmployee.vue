<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
      <v-btn flat icon color="pink" v-on="on"><v-icon>account_circle</v-icon></v-btn>
      </template>

      <v-card>
        <v-card-title class="headline info lighten-2 " style="color:white" primary-title>
          <h3>Employee Info</h3>
        </v-card-title>

        <v-card-text>
          <p>Name : {{ userData.name}}</p>
          <p>National ID : {{ userData.nationalID}}</p>
          <p>Phone : {{ userData.phoneNumber}}</p>
          <p>User Name : {{ userData.username}}</p>
          <p>Email : {{ userData.email}}</p>
          <p>Gender : {{ userData.gender}}</p>
          <p>Balance : {{ userData.balance}}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" @click="dialog = false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    nid: ''
  },
  data() {
    return {
      userData: {},
      nationalID: "",
      dialog: false
    };
  },
  created() {
    this.nationalID = this.nid;
    this.$ax
      .get(`/employee/search/${this.nationalID}`)
      .then(res => {
        const data = res.data.result[0];
        this.userData = data;
      })
  }
};
</script>
