<template>
  <div>
    <h1 style="color:white">Trips :</h1>
    <br>
    <v-card class="fnt">
      <v-layout row wrap>
        <v-flex xs3 md3 class="pa-3">
          <div class="caption grey--text">Name</div>
        </v-flex>
        <v-flex xs3 md3 class="pa-3">
          <div class="caption grey--text">Number</div>
        </v-flex>
        <v-flex xs3 md4 class="pa-3">
          <div class="caption grey--text">Statue</div>
        </v-flex>
        <v-flex xs3 md2 class="pa-3">
          <div class="caption grey--text">Tools</div>
        </v-flex>
      </v-layout>

      <v-layout row wrap v-for="(x,i) in trainData" :key="i" class="hover">
        <v-flex xs3 md3 class="pa-3" @click="getLi(x)">
          <div >{{ x.name }}</div>
        </v-flex>
        <v-flex xs3 md3 class="pa-3">
          <div  @click="getLi(x)">{{ x.number }}</div>
        </v-flex>
        <v-flex xs3 md4 class="pa-3">
          <div >{{ x.status }}</div>
        </v-flex>
        <v-flex xs1 md1>
          <v-layout row wrap>
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
              <app-view-profile2 :id="x._id"></app-view-profile2>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import appViewProfile2 from "./viewTrain";
export default {
  props: {
    filter: String
  },
  components: {
    appViewProfile2
  },
  data() {
    return {
      trainData: [],
      counter: ""
    };
  },
  methods: {
    //For View Profile
    getLi(x) {
      // this.$router.push(`/clients/view/${x.nationalID}`);
    },
    //For Edit(Update) Component
    getEdit(x) {
      this.$router.push(`/trains/updateTrain/${x._id}`);
    },
    //For Delete This Train
    getDelete(x, i) {
      this.$ax
        .delete(`/train/${x._id}`)
        .then(res => console.log(res))
        .then(() => {
          this.trainData.splice(i, 1);
        });
    }
  },
  created() {
    this.$ax.get("/train").then(res => {
      const data = res.data.result;
      for (let k in data) {
        const train = data[k];
        this.trainData.push(train);
      }
    });
  },
  computed: {
    // filterData() {
    //   return this.trainData.filter(element => {
    //     return element.name.match(this.filter);
    //   });
    // }
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

.hover:hover{
  color:rgb(243, 40, 74);
  cursor: pointer;
}
</style>
