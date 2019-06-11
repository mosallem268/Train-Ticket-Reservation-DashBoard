<template>
  <div>
    <v-container>
      <v-text-field v-model="filter" prepend-icon="search" label="Search" solo></v-text-field>
      <router-view :filter="filter"></router-view>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: ""
    };
  }
};
</script>
<style scoped>
.fnt {
  font-size: 15px;
}
</style>

