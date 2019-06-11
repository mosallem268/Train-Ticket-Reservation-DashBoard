<template>
  <v-app class="gridian">
    <app-nav></app-nav>
    <v-content>
      <transition mode="out-in" name="slide">
        <router-view></router-view>
        <!-- <components :is="loginCom" mode="out-in"></components> -->
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import nav from "./components/Navigation/nav";

export default {
  name: "App",
  components: {
    appNav: nav
  },
  data() {
    return {};
  },
  methods: {}
  // created() {
  //   setTimeout(() => {
  //     this.loginCom = "appLogIn";
  //   }, 2000);
  // }
};
</script>


<style scoped>
.gridian{
    background-image: linear-gradient(to left , #ee0979 , #ff6a00);
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  /* position: absolute; */
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>