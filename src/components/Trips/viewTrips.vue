<template>
  <div>
    <h1 style="color:white">Trips :</h1>
    <br>
    <v-list>
      <v-list-group v-for="(item,i) in items" :key="i" v-model="item.active" no-action>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-layout row>
                  <v-flex md6>
                    <p>From: {{item.from}}</p>
                  </v-flex>
                  <v-flex md6>To: {{item.to}}</v-flex>
                </v-layout>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <h3 style="margin-left:20px">Single Trips:</h3>
        <v-list-tile v-for="(subItem,i) in item.singleTrip" :key="i">
          <v-list-tile-content>
            <v-list-tile-title>
              <v-layout row>
                <v-flex md6>
                  <p>{{ subItem.sorted }}- {{subItem.station}}</p>
                </v-flex>
                <v-flex md6>
                  <p>
                    Arrived :
                    <span style="color:red">{{subItem.statue}} ({{subItem.arrivalTime}})</span>
                  </p>
                </v-flex>
              </v-layout>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: []
      // dataTest: {
      //   from: "Qena",
      //   to: "Cairo",
      //   active: false,
      //   arrivalTime: "6:00",
      //   depTime: "19:00",
      //   dataArray: [
      //     {
      //       sorted: "1",
      //       station: "Cairo",
      //       statue: "False"
      //     }
      //   ]
      // }
    };
  },
  methods: {
    getAllTrips() {
      this.$ax.get("trip").then(res => {
        let data = res.data.result;
        for (let k in data) {
          axios
            .get(`justTrip/byTrip/${data[k]._id}`)
            .then(res => {
              let data2 = res.data.result;
              let dataArray = [];
              let obj = {
                singleTrip: []
              };
              console.log(data2);
              for (let m = 0; m < data2.length; m++) {
                let element = data2[m];
                if (m == 0) {
                  obj.from = element.from.name;
                  let arrivalTime = element.arrivalTime;
                  let sorted = element.sort;
                  let statue = element.arrived;
                  obj.singleTrip.push({
                    arrivalTime: arrivalTime,
                    sorted: sorted,
                    station: obj.from,
                    statue: statue
                  });
                } else if (m == data2.length - 1) {
                  let arrivalTime = element.arrivalTime;
                  obj.to = element.from.name;
                  obj.sorted = element.sort;
                  obj.statue = element.arrived;
                  obj.singleTrip.push({
                    arrivalTime: arrivalTime,
                    sorted: obj.sorted,
                    station: obj.to,
                    statue: obj.statue
                  });
                } else {
                  let station = element.from.name;
                  let arrivalTime = element.arrivalTime;
                  let sorted = element.sort;
                  let statue = element.arrived;
                  obj.singleTrip.push({
                    arrivalTime: arrivalTime,
                    sorted: sorted,
                    station: station,
                    statue: statue
                  });
                }
              }
              console.log(obj);
              this.items.push(obj);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  created() {
    this.getAllTrips();
  }
};
</script>


<style scoped>
</style>
