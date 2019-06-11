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
      <h3>Days: </h3>
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
          <v-btn dark class="btn" @click="updateBtn">Update Train</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:'',
      name:'',
      number:Number,
      status:false,
      selected: [],
      trainData: [],
      dataObj:{}
    };
  },
  methods: {
    check() {
      this.name = this.trainData[0].name;
      this.number = this.trainData[0].number;
      this.status = this.trainData[0].status;
      this.selected = this.trainData[0].days;
    },
    updateBtn() {
      this.dataObj = [
        {"key":"name" ,"value" : this.name},
        {"key":"number" ,"value" : this.number},
        {"key":"status" ,"value" : this.status},
        {"key":"days" ,"value" : this.selected},
        ];
      this.$ax
        .patch(`/train/${this.id}`, this.dataObj)
        .then(res => console.log(res)).then(()=>{
          setTimeout(()=>{
            this.$router.push('/trains')
          },3000)
        },3000);
    }
  },
  created() {
    this.id = this.$route.params.idUpdateTrain;
    this.$ax
      .get(`/train/${this.id}`)
      .then(res => {
        const data = res.data.result;
        this.trainData.push(data);
      })
      .then(() => {
        this.check();
      });
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
  position: absolute;
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
