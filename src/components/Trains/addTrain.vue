<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md12>
          <v-text-field class="mr-1" v-model="name" label="Name" type="username"></v-text-field>
        </v-flex>
        <v-flex xs12 md12>
          <v-text-field class="ml-1" v-model="number" label="Number" type="number"></v-text-field>
        </v-flex>
      </v-layout>
      <h3>Days:</h3>
      <v-layout row>
        <v-checkbox v-model="selected" label="Saturday" value="saturday"></v-checkbox>
        <v-checkbox v-model="selected" label="Sunday" value="sunday"></v-checkbox>
        <v-checkbox v-model="selected" label="Monday" value="monday"></v-checkbox>
        <v-checkbox v-model="selected" label="Tuesday" value="tuesday"></v-checkbox>
        <v-checkbox v-model="selected" label="Wednesday" value="wednesday"></v-checkbox>
        <v-checkbox v-model="selected" label="Thursday" value="thursday"></v-checkbox>
        <v-checkbox v-model="selected" label="Friday" value="friday"></v-checkbox>
      </v-layout>
      <v-layout row>
        <v-flex xs6 md6>
          <v-checkbox v-model="status" label="Statue"></v-checkbox>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn dark class="btn" @click="submit">Add Train</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      number: Number,
      status: false,
      selected: []
    };
  },
  methods: {
    submit() {
      const result = {
        name: this.name,
        number: this.number,
        status: this.status,
        days: this.selected
      };
      console.log(result);
      this.$ax
        .post("/train", result)
        .then(res => {
          console.log(res);
        })
        .then(() => {
          this.name = "";
          this.number = null;
          this.status = null;
          this.selected = null;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0 50px;
  text-align: center;
  background-image: linear-gradient(to right, #1dc4e9, #1de9b6);
  float: right;
  border-radius: 8px;
}
</style>
