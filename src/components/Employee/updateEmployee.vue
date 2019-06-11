<template>
  <div>
    <v-container>
      <transition mode="out-in" name="slide">
        <div v-if="!show">
          <h1>Update</h1>
          <hr>
          <v-layout row class="mt-4">
            <v-flex xs6 md6>
              <v-text-field class="mr-2" v-model="userName" label="User Name" type="username"></v-text-field>
            </v-flex>
            <v-flex xs6 md6>
              <v-text-field class="ml-2" v-model="email" label="Email" type="email"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 md6>
              <v-text-field class="mr-2" v-model="name" label="Name"></v-text-field>
            </v-flex>
            <v-flex xs6 md6>
              <v-text-field class="ml-2" prefix="$" v-model="balance" label="Balance"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 md8>
              <v-text-field class="mr-2" v-model="nationalID" label="National ID" type="number"></v-text-field>
            </v-flex>
            <v-flex xs6 md8>
              <v-text-field class="ml-2" v-model="phone" label="Phone" type="number"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 md6>
              <v-checkbox v-model="checkbox" label="Validate ?!"></v-checkbox>
            </v-flex>
            <v-flex xs6 md6>
              <v-btn style="position:right" dark class="btn mt-4" @click.prevent="updateBtn">Update</v-btn>
            </v-flex>
          </v-layout>
        </div>
      <v-alert
      :value="show"
      type="success"
      transition="scale-transition"
    >
      This Employee Successfuly Updated.
    </v-alert>
      </transition>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      emailDelete: "shazam@hero.com",
      checkbox: true,
      userData: [],
      email: "",
      phone: 0,
      nationalID: "",
      age: 0,
      balance: "",
      name: "",
      userName: "",
      dataObj: {},
      id: ""
    };
  },
  methods: {
    check() {
      this.email = this.userData[0].email;
      this.phone = this.userData[0].phone;
      this.userName = this.userData[0].username;
      this.name = this.userData[0].name;
      this.balance = this.userData[0].balance;
      this.nationalID = this.userData[0].nationalID;
      this.age = this.userData[0].dateOfBirth;
      this.phone = this.userData[0].phoneNumber;
    },
    updateBtn() {
      this.dataObj = [
        {"key":"name" ,"value" : this.name},
        {"key":"username" ,"value" : this.userName},
        {"key":"email" ,"value" : this.email},
        {"key":"phoneNumber" ,"value" : this.phone},
        {"key":"balance" ,"value" : this.balance},        
        {"key":"validation" ,"value" : this.checkbox},        
        {"key":"dateOfBirth" ,"value" : this.age},        
        ];
      axios
        .patch(`/employee/update/${this.id}`, this.dataObj)
        .then(res => console.log(res))
        .then(()=>{
          this.show = !this.show
          setTimeout(()=>{
            this.$router.push('/employee')
          },3000)
        });
    }
  },
  created() {
    // setTimeout(() => {
    //   this.show = true;
    // }, 1000);
    this.id = this.$route.params.idUpdateEmployee;
    console.log(this.id)
    axios
      .get(`/employee/search/${this.id}`)
      .then(res => {
        console.log(res)
        const data = res.data.result;
        this.userData.push(data[0]);
        // console.log(this.userData[0].email)
      })
      .then(() => {
        this.check();
      });
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
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
