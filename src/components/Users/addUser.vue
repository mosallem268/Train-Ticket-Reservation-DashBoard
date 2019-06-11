<template>
  <div>
    <v-container>
      <h1 style="color:white">Add User</h1> <br><br>
      <v-layout row wrap>
        <v-flex xs6 px-2 md6>
          <v-text-field class="mr-2" v-model="email" label="Email" type="email"></v-text-field>
        </v-flex>
        <v-flex xs6 md6 px-2>
          <v-text-field class="mr-1" v-model="name" label="Name"></v-text-field>
        </v-flex>
        <v-flex xs6 md6 px-2>
          <v-text-field class="ml-1" v-model="pass" label="Password" type="password"></v-text-field>
        </v-flex>
        <v-flex xs6 md6 px-2>
          <v-text-field class="ml-1" v-model="confirmPass" label="Confirm Password" type="password"></v-text-field>
        </v-flex>
        <v-flex xs6 md8 px-2>
          <v-text-field class="mr-2" v-model="nid" label="National ID" type="number"></v-text-field>
        </v-flex>
        <v-flex xs6 md4 px-2>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date" label="Date" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs6 px-2 md12>
        <br>
          <v-btn dark class="btn" @click="submit">Add User</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      pass: null,
      name: "",
      confirmPass: null,
      email: "",
      phone: null,
      nid: null,
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      age: null
    };
  },
  methods: {
    submit() {
      const result = {
        username: this.userName,
        password: this.pass,
        name: this.name,
        email: this.email,
        phoneNumber: this.phone,
        gender: "male",
        dateOfBirth: "2019-02-19T20:18:02.102Z",
        nationalID: this.nid,
        validation: true,
        balance: 100
      };
      console.log(result);
      this.$ax
        .post("/user/signup", result)
        .then(res => {
            this.$router.push('/clients')
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0 50px;
  text-align: center;
  background-image: linear-gradient(to right, #1dc4e9, #1de9b6);
  float: right;
  border-radius: 8px;
}
</style>
