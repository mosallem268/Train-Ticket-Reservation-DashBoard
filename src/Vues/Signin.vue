<template>
  <div style="height:100%">
    <v-layout style="height:100%">
      <v-flex xs12 md4>
        <div class="pic">
          <!-- <img src="../imgs/logIn.jpg" alt=""> -->
        </div>
      </v-flex>

      <v-flex xs12 md8 class="text-xs-center">
        <v-container>
          <p
            class="display-2 parag font-weight-medium"
            style="color:white"
          >Welcome to The Train Reservation System</p>
          <v-form class="pa-5" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              prepend-icon="email"
              label="E-mail"
              color="white"
              required
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              label="Password"
              color="white"
              class="a"
              required
              prepend-icon="vpn_key"
              v-model="password"
              @click:append="show = !show"
              :rules="required"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :type="show ? 'text' : 'password'"
            ></v-text-field>
              
            <v-checkbox color="white" v-model="checkbox" label="Remember me" type="password"></v-checkbox>

            <v-btn
              dark
              class="btn"
              @click="validate();loader = 'loading'"
              :loading="loading"
            >Sign In</v-btn>
          </v-form>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      loader: null,
      email: "",
      password: "",
      show: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      required: [value => !!value || "Required."]
    };
  },
  watch: {
    loader() {
      if (this.$refs.form.validate()) {
        const l = this.loader;
        this[l] = !this[l];
      }

      // setTimeout(() => (this[l] = false), 3000)
      // this.loader = null
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("validate", {
            email: this.email,
            password: this.password
          })
          .then(
            res => {
              this.loading = false;
              this.loader = null;
              this.$router.push(`/clients`);
            },
            error => {
              this.loading = false;
              this.loader = null;
              console.log(error);
            }
          );
      }
    }
  }
  // data() {
  //   return {
  //     linkMsln: true
  //   };
  // },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.linkMsln;
  //   });
  //   // aw mmkn aqol
  //   if (true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
  // beforeRouteLeave(to, from, next) { //hay5rog 3la tool 34an true anma lw m4 true lazm a5liha true ama ados ok 3l confirm msg
  //   if (this.linkMsln) {
  //     next();
  //   } else {
  //     if (confirmed("Are You Sure")) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // }
};
</script>
<style scoped>
.pic {
  background-image: url("../imgs/logIn.jpg");
  background-position: center;

  height: 100%;
  width: 100%;
}
.btn {
  padding: 0 50px;
  text-align: center;
  background-image: linear-gradient(to right, #1dc4e9, #1de9b6);
  float: right;
  border-radius: 8px;
}
.parag {
  color: gray;
  padding-top: 50px;
  margin-bottom: 50px;
  margin-top: 50px;
}
.a {
 color: white;
}
</style>
