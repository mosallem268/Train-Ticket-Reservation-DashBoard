<template>
  <div>
    <h1 style="color:white">Trips & Employees</h1>
    <br>
    <v-layout row>
      <v-flex md6>
        <!-- Trip -->
        <v-list>
          <v-list-group v-for="(item,i) in items" :key="i" v-model="item.active" no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <v-layout row>
                      <v-flex md3>
                        <p>From: {{item.from}}</p>
                      </v-flex>
                      <v-flex md3>To: {{item.to}}</v-flex>
                      <v-flex md3>Arrival: {{item.arrivalTime}}</v-flex>
                      <v-flex md3>Departal: {{item.depTime}}</v-flex>
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
                        <span style="color:red">{{subItem.statue}}</span>
                      </p>
                    </v-flex>
                  </v-layout>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-flex>
      <v-flex md6>
        <!-- Employee -->
        <v-list >
          <v-list-group v-model="active" no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <v-layout row wrap>
                      <v-flex md3>
                        <p>Mohamed</p>
                      </v-flex>
                      <v-flex md5>NID: 422589963412</v-flex>
                      <v-flex md4>Phone: 01068805304</v-flex>
                    </v-layout>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <h3 style="margin-left:20px">Trips today:</h3>
            <v-list-tile  >
              <v-list-tile-content >
                <v-list-tile-title >
                  <h4>Haven't any Trips yet</h4>
                </v-list-tile-title>
              </v-list-tile-content>
                <v-list-tile-action>
                <v-list-tile-action-text> <v-icon color="red">send</v-icon> </v-list-tile-action-text>
                </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      items: [
        {
          title: "Attractions",
          from: "Cairo",
          to: "Alex",
          arrivalTime: "2:00",
          depTime: "5:00",
          singleTrip: [
            {
              sorted: "1",
              station: "Cairo",
              statue: "False"
            },
            {
              sorted: "2",
              station: "Shoubra",
              statue: "False"
            },
            {
              sorted: "3",
              station: "Banha",
              statue: "False"
            },
            {
              sorted: "4",
              station: "Alex",
              statue: "False"
            }
          ]
        },
        {
          title: "Attractions",
          from: "Cairo",
          to: "Qena",
          arrivalTime: "8:00",
          depTime: "23:00",
          singleTrip: [
            {
              sorted: "1",
              station: "Cairo",
              statue: "False"
            },
            {
              sorted: "2",
              station: "Shoubra",
              statue: "False"
            },
            {
              sorted: "3",
              station: "Banha",
              statue: "False"
            },
            {
              sorted: "4",
              station: "Alex",
              statue: "False"
            }
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
</style>
