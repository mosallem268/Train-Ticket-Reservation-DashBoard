<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs6 md6>
          <v-text-field class="mr-1" v-model="userName" label="User Name" type="username"></v-text-field>
        </v-flex>
        <v-flex xs6 md6>
          <v-text-field class="ml-1" v-model="pass" label="Password" type="password"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 md6>
          <v-text-field class="mr-1" v-model="name" label="Name"></v-text-field>
        </v-flex>
        <v-flex xs6 md6>
          <v-text-field class="ml-1" v-model="confirmPass" label="Confirm Password" type="password"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 md6>
          <v-text-field class="mr-2" v-model="email" label="Email" type="email"></v-text-field>
        </v-flex>
        <v-flex xs6 md6>
          <v-text-field class="ml-2" v-model="phone" label="Phone" type="number"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 md8>
          <v-text-field class="mr-2" v-model="nid" label="National ID" type="number"></v-text-field>
        </v-flex>
        <v-flex xs6 md4>
          <v-text-field class="ml-2" v-model="age" label="Age" type="number"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 md8></v-flex>
        <v-flex xs6 md4>
          <v-btn dark class="btn" @click="submit">Add Employee</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
        userName:'',
        pass: null,
        name: '',
        confirmPass: null,
        email:'',  
        phone:null,  
        nid:null,  
        age:null,  
    }
  },methods:{
    submit(){
        const result={
          username:this.userName,
          password: this.pass,
          name: this.name,
          email:this.email,  
          phoneNumber:this.phone,  
          gender:'male',
          dateOfBirth:"2019-02-19T20:18:02.102Z",
          nationalID:this.nid, 
          validation: true ,
          balance: 100
        }
      console.log(result)
      this.$ax.post('/employee/signup' , result).then(res=>console.log(res)).catch(error=>console.log(error))
    }
  }
}
</script>

<style scoped>
.btn{
  padding: 0 50px;
  text-align: center;
  background-image: linear-gradient(to right , #1DC4E9 , #1DE9B6);
  float:right;
  border-radius: 8px;
}
</style>
