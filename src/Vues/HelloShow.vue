<template>
  <div class="showImg">
    <v-container>
      <v-layout row>
        <v-flex xs12 md12>
          <h1>Hello To Our Web Site Ticket Reservation</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  created(){
    setTimeout(()=>{
      this.$router.push('/signin')
    },3000)
  }
};
</script>

<style scoped>
.showImg {
  background-image: url("../imgs/train.jpg");
  background-position: center; /* Center the image */
  /* width:500px; */
  height: 100%;
  /* background-repeat: repeat; */
  background-size: cover;
  text-align: center;
  font-size: 300%;
  color :rgba(187, 48, 48, 0.9);
}
</style>
