<template>
  <div class="text-xs-center">
    <v-dialog persistent v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn flat icon @click="create();getAllTrips()" color="pink" v-on="on">
          <v-icon>add</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline info lighten-2" style="color:white" primary-title>
          <h3>Add Employee Trip</h3>
        </v-card-title>

        <v-card-text>
          <v-layout row wrap>
            <v-flex md12>
              <v-select
                v-model="trip"
                :items="tripsData"
                item-text="number"
                item-value="_id"
                return-object
                label="Trips"
                persistent-hint
              ></v-select>
            </v-flex>
            <v-flex md12>
              <v-btn style="width:100%" @click="post" class="success">Done</v-btn>
            </v-flex>
          </v-layout>
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
    nida: ""
  },
  data() {
    return {
      userData: {},
      nationalID: "",
      dialog: false,
      tripsData:[],
      trip:{}
    };
  },
  methods: {
    create() {
      this.nationalID = this.nida;
      this.$ax.get(`/employee/search/${this.nationalID}`).then(res => {
        const data = res.data.result[0];
        this.userData = data;
      });
    },
    getAllTrips() {
      this.$ax.get("/trip").then(res => {
        let data = res.data
        for(let k in data){
          let aa = data[k]
          this.tripsData = aa 
        }
      });
    }
  }
};
</script>
