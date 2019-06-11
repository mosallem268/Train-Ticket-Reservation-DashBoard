<template>
  <v-card class="fnt">
    <!-- <v-text-field v-model="filter" prepend-icon="search" type="number" label="Filter Search" solo></v-text-field> -->
    <v-layout row wrap>
      <v-flex xs3 md3 class="pa-3">
        <div class="caption grey--text">Employees</div>
      </v-flex>
      <v-flex xs3 md2 class="pa-3">
        <div class="caption grey--text">National ID</div>
      </v-flex>
      <v-flex xs3 md2 class="pa-3">
        <div class="caption grey--text">Email Address</div>
      </v-flex>
      <v-flex xs3 md3 class="pa-3">
        <div class="caption grey--text">Phone Number</div>
      </v-flex>
      <v-flex xs3 md2 class="pa-3">
        <div class="caption grey--text">Tools</div>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-for="(x,i) in filterData" :key="i" class="hover">
      <v-flex xs3 md3 class="pa-3" @click="getLi(x)">
        <div>
          <v-avatar size="30px" color="grey lighten-4">
            <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt="avatar">
          </v-avatar>
          {{ x.name }}
        </div>
      </v-flex>
      <v-flex xs3 md2 class="pa-3">
        <div>{{ x.nationalID }}</div>
      </v-flex>
      <v-flex xs3 md2 class="pa-3">
        <div>{{ x.email }}</div>
      </v-flex>
      <v-flex xs2 md3 class="pa-3">
        <!-- <div class="caption grey--text">NID</div> -->
        <div>{{ x.phoneNumber }}</div>
      </v-flex>
      <v-flex xs1 md2>
        <v-layout row>
          <v-flex xs3 md3>
            <appAddTrip :nida="x.nationalID"></appAddTrip>
          </v-flex>
          <v-flex xs3 md3>
            <v-btn flat icon color="pink" @click="getEdit(x)">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs3 md3>
            <v-btn flat icon color="pink" @click="getDelete(x,i)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs3 md3>
            <app-view-profile :nid="x.nationalID"></app-view-profile>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import axios from "axios";
import appViewProfile from "./viewEmployee";
import appAddTrip from "./addTripEmp";
export default {
  props: {
    filter: String
  },
  components: {
    appViewProfile,
    appAddTrip
  },
  data() {
    return {
      userData: [],
      counter: ""
    };
  },
  methods: {
    //For Edit(Update) Component
    getEdit(x) {
      this.$router.push(`/employee/updateEmployee/${x.nationalID}`);
    },
    //For Delete This User
    getDelete(x, i) {
      axios
        .delete(`/employee/delete/${x.nationalID}`)
        .then(res => {
          console.log(res);
          console.log(x.nationalID);
        })
        .then(() => {
          this.userData.splice(i, 1);
        });
    },
  },
  created() {
    this.$ax.get("/employee").then(res => {
      const data = res.data.result;
      for (let k in data) {
        const user = data[k];
        this.userData.push(user);
      }
    });
  },
  computed: {
    filterData() {
      console.log(1);
      return this.userData.filter(element => {
        return element.nationalID.match(this.filter);
      });
    }
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hover:hover {
  color: rgb(243, 40, 74);
  cursor: pointer;
}
</style>
