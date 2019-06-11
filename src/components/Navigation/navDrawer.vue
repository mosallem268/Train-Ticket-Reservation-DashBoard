<template>
  <v-navigation-drawer app v-model="modelTool">
    <v-list>
      <!-- <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title><span style="color:red">Home</span></v-list-tile-title>
      </v-list-tile>-->
      <!-- <hr> -->
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <h3>
                  <span style="color:red">{{adminData.name}}</span>
                </h3>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile to="/clients">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile exact :to="subItem.route" v-for="subItem in item.items" :key="subItem.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    modelTool: Boolean
  },
  data() {
    return {
      items: [
        {
          action: "fa-hospital-alt",
          title: "Users",
          items: [
            { title: "List of Users", route: "/clients" },
            { title: "Add New User", route: "/clients/createUser" }
          ]
        },
        {
          action: "fa-clinic-medical",
          title: "Employees",
          items: [
            { title: "List of Employees", route: "/employee" },
            { title: "Add New Employee", route: "/employee/createEmployee" }
          ]
        },
        { ///////////////////////////////////////////
          action: "fa-users",
          title: "Trip",
          items: [
            { title: "List of Trips", route: "/user" },
            { title: "Add Trips", route: "/user" }
          ]
        },
        {
          action: "fa-newspaper",
          title: "Trains",
          items: [
            { title: "List of Trains", route: "/trains" },
            { title: "Add New Train", route: "/trains/createTrain" }
          ]
        },
        {
          action: "fa-user-md",
          title: "Admin",
          items: [
            { title: "List Admin Team ", route: "/admin" },
            { title: "Add New Satff Member", route: "/staff/addStaff" }
          ]
        },
        {
          action: "fa-envelope",
          title: "Complains",
          items: [
            { title: "List of All Complains", route: "a" },
            { title: "Answer Complains", route: "a" }
          ]
        },
        {
          action: "fa-calendar-check",
          title: "Appointments",
          items: [
            { title: "Calendar", route: "a" },
            { title: "Add New Appointment", route: "a" },
            { title: "Add New Schedule", route: "a" }
          ]
        },
        {
          action: "fa-user-injured",
          title: "Patients",
          items: [
            {
              title: "Medical History of a Patient",
              route: "/patient/medicalHistory"
            },
            { title: "Add New Patient", route: "/patient/addPatient" },
            { title: "Add New Node", route: "/patient/addNewNode" }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      adminData: "adminData"
    })
  }
};
</script>

<style scoped>
</style>
