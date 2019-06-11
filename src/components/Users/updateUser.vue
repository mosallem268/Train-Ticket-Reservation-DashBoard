<template>
  <div>
    <v-container>
      <transition mode="out-in" name="slide">
        <div v-if="!show">
          <h1>Update</h1>
          <hr>
          <br>
          <v-layout row wrap class="mt-4">
            <v-flex px-2 xs6 md6>
              <v-text-field class="ml-2" v-model="email" label="Email" type="email"></v-text-field>
            </v-flex>

            <v-flex xs6  px-2 md6>
              <v-text-field class="mr-2" v-model="name" label="Name"></v-text-field>
            </v-flex>
            <v-flex xs6 px-2 md6>
              <v-text-field class="ml-2" prefix="$" v-model="balance" label="Balance"></v-text-field>
            </v-flex>

            <v-flex xs6 md6 px-2>
              <v-text-field class="mr-2" v-model="nationalID" label="National ID" type="number"></v-text-field>
            </v-flex>

            <v-flex xs6 md6 px-2>
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
      This User Successfuly Updated.
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
      nationalID: "",
      age: 0,
      balance: "",
      name: "",
      dataObj: {},
      id: ""
    };
  },
  methods: {
    check() {
      this.email = this.userData[0].email;
      this.name = this.userData[0].name;
      this.balance = this.userData[0].balance;
      this.nationalID = this.userData[0].nationalID;
    },
    updateBtn() {
      this.dataObj = [
        {"key":"name" ,"value" : this.name},
        {"key":"email" ,"value" : this.email},
        {"key":"balance" ,"value" : this.balance},        
        {"key":"validation" ,"value" : this.checkbox},        
        ];
      axios
        .patch(`/user/update/${this.$route.params.idUpdateUser}`, this.dataObj)
        .then(res => console.log(res)).then(()=>{
          this.show = !this.show
          setTimeout(()=>{
            this.$router.push('/clients')
          },3000)
        },3000);
    }
  },
  created() {
    axios
      .get(`/user/search/${this.$route.params.idUpdateUser}`)
      .then(res => {
        const data = res.data.result;
        this.userData.push(data[0]);
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
  /* position: absolute; */
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
