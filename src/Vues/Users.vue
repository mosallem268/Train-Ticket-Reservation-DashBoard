<template>
  <div>
    <v-container>
        <router-view ></router-view>
    </v-container>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      filter: ""
      // userData: [],
      // counter: ""
    };
  },
  methods: {
    // check(event) {}
  }
  // created() {
  //   axios.get("/user").then(res => {
  //     const data = res.data.result;
  //     for (let k in data) {
  //       const user = data[k];

  //       this.userData.push(user);
  //     }
  //   });
  // }
};
</script>
<style scoped>
.fnt {
  font-size: 15px;
}
</style>

