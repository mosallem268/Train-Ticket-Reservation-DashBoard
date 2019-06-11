<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on }">
        <v-btn flat icon @click="show" v-on="on">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline info lighten-2" style="color:white" primary-title>
          <h3>User Trips Info</h3>
        </v-card-title>

        <v-card-text>
          <v-layout row wrap v-for="(x,i) in dataArray" :key="i">
            <v-flex md12>
              <div>
                <h3>Reservation : {{i+1}}</h3>
                <p style="margin-bottom:5px">Train Number : {{x.ticket.trian.number}}</p>
                <p style="margin-bottom:5px">From : {{x.ticket.from.name}} ({{x.arrivalTime}})</p>
                <p style="margin-bottom:5px">To : {{x.ticket.to.name}} ({{x.endTime}})</p>
                <p style="margin-bottom:5px">Seate Number : {{x.seat.number}}</p>
                <p style="margin-bottom:5px">Statues : {{x.status}}</p>
              </div>
              <br>
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
import { mapGetters } from "vuex";
export default {
  props: {
    id: ""
  },
  data() {
    return {
      dialog: false,
      dataArray: []
    };
  },
  methods: {
    show() {
      // this.dialog= false
      this.$ax.get(`reservation/byUser/${this.id}`).then(res => {
        let data = res.data.reservation;
        for (let k in data) {
          let ka = data[k];
          this.dataArray.push(ka);
        }
        console.log(this.dataArray)
      });
    }
  },
  computed: {
    ...mapGetters({
      userData: "userDataShow"
    })
  }
};
</script>
