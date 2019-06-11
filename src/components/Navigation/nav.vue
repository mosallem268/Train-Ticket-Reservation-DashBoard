<template>
  <div>
    <nav>
      <v-toolbar app>
        <v-toolbar-side-icon @click="modelTool = !modelTool" v-if="showNav"></v-toolbar-side-icon>
        <icon></icon>
        <v-toolbar-title>
          <span style="color:red">Train</span> Reservation
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat color="grey" to="/signup" style="text-transform: capitalize;" v-if="showNav">Add Admin</v-btn>
          <v-btn flat color="grey" @click="signOut" v-if="showNav">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- Nav Drawer -->
    </nav>
    <app-nav-drawer :modelTool="modelTool"></app-nav-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import navDrawer from "./navDrawer";
export default {
  components: {
    appNavDrawer: navDrawer
  },
  data() {
    return {
      modelTool: false
    };
  },
  computed: {
    ...mapGetters({
      showNav: "showNavBar"
    })
  },
  methods: {
    signOut(){
      this.$store.dispatch('logOut')
      this.$router.push('/signin')
    }
  }
};
</script>

<style>
</style>
