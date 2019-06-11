<template>
  <div>
    <v-layout row>
      <v-flex xs10 md11 sm10>
        <v-text-field v-model="filter" label="Filter Search" solo></v-text-field>
      </v-flex>
      <v-flex xs2 md1 sm2>
        <v-btn @click="getAll" style="float:right" icon>
          <v-icon>autorenew</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 pa-2 sm6 md12 v-for="(x,i) in filterData" :key="i">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="mb-0">Name: {{x.name}}</h1>
              <div>National ID : {{x.nationalID}}</div>
              <div v-if="!showArray[i]">....</div>
              <div v-if="showArray[i]">
                <div>Email : {{x.email}}</div>
                <div>Gender : {{x.gender}}</div>
                <div>Balance : {{x.balance}}</div>
                <div>Validation : {{x.validation}}</div>
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <popup :id="x._id"/> -->
            <v-btn @click="getEdit(x,i)" icon>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn @click="getDelete(x,i)" icon>
              <v-icon>delete</v-icon>
            </v-btn>
            <appViewProfile :id="x._id"/>
            <v-btn icon @click="(showArray[i]=show);(show= !show)">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import appViewProfile from "./viewUser";
export default {
  props: {
    filter: String
  },
  components: {
    appViewProfile
  },
  data() {
    return {
      userData: [],
      show: true,
      showArray: []
    };
  },
  methods: {
    ss(s) {
      console.log(s);
    },
    //For View Profile
    getLi(x) {
      // this.$router.push(`/clients/view/${x.nationalID}`);
    },
    //For Edit(Update) Component
    getEdit(x) {
      this.$router.push(`/clients/updateUser/${x.nationalID}`);
    },
    //For Delete This User
    getDelete(x, i) {
      this.$ax
        .delete(`/user/delete/${x.nationalID}`)
        .then(res => {
          console.log(res);
        })
        .then(() => {
          this.userData.splice(i, 1);
        });
    },
    getAll() {
      this.$ax.get("/user").then(res => {
        this.userData = []
        console.log(this.userData)
        const data = res.data.result;
        for (let k in data) {
          const user = data[k];
          this.userData.push(user);
        }
        console.log(this.userData);
      });
    }
  },
  created() {
    this.getAll();
  },
  computed: {
    filterData() {
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
  color: rgb(255, 123, 0);
}
</style>
