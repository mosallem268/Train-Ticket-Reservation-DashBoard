<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
      <v-btn flat icon color="pink" v-on="on"><v-icon>account_circle</v-icon></v-btn>
      </template>

      <v-card>
        <v-card-title class="headline info lighten-2 " style="color:white" primary-title>
          <h3>Train Info</h3>
        </v-card-title>

        <v-card-text>
          <p>Name : {{ trainData.name}}</p>
          <p>Number : {{ trainData.number}}</p>
          <p>Status : {{ trainData.status}}</p>
          <p>Days : 
            <ul style="list-style: none;">
              <li  v-for="(day,i) in trainData.days" :key="i">{{day}}</li>
            </ul>
          </p>
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
  id: ''
  },
  data() {
    return {
      trainData: {},
      dialog: false,
    };
  },
  created() {
    this.$ax
      .get(`/train/${this.id}`)
      .then(res => {
        const data = res.data.result;
        this.trainData = data;
      });
  }
};
</script>
