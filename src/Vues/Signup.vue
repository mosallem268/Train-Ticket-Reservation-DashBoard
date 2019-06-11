<template>
  <div>
    <v-container>
      <v-card>
        <v-container fluid grid-list-md>
          <h1 style="border-bottom:.5px solid red;">ADD New Admin :</h1>
          <v-form ref="form" @submit.prevent="onSubmit" v-model="valid">
            <v-layout wrap row py-4>
              <v-flex md6>
                <v-text-field label="Name" v-model="name" type="text" clearable single-line></v-text-field>
              </v-flex>

              <v-flex md6>
                <v-text-field
                  label="User Name"
                  v-model="userName"
                  type="text"
                  clearable
                  single-line
                ></v-text-field>
              </v-flex>
              <v-flex md6>
                <v-text-field
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  v-model="email"
                  type="email"
                  clearable
                  single-line
                ></v-text-field>
              </v-flex>

              <v-flex md6>
                <v-text-field
                  label="Phone Number"
                  v-model="phoneNumber"
                  type="number"
                  clearable
                  single-line
                ></v-text-field>
              </v-flex>

              <v-flex md6>
                <v-select
                  v-model="station"
                  :hint="`${station.value}`"
                  :items="stationItem"
                  item-text="state"
                  item-value="value"
                  offset-y
                  top
                  label="Station"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>

              <v-flex md6>
                <v-text-field
                  label="National ID"
                  v-model="nationalID"
                  pattern="\d*"
                  :rules="[rules.required,rules.counter]"
                  counter
                  maxlength="14"
                  clearable
                  single-line
                ></v-text-field>
              </v-flex>

              <v-flex md6>
                <v-text-field
                  label="Password"
                  v-model="password"
                  @click:append="show = !show"
                  :rules="[rules.required, rules.min]"
                  hint="At least 8 characters"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :type="show ? 'text' : 'password'"
                  single-line
                ></v-text-field>
              </v-flex>

              <v-flex md6>
                <v-select
                  v-model="userType"
                  :hint="`${userType.value}`"
                  :items="userTypeItem"
                  offset-y
                  item-text="state"
                  item-value="value"
                  label="Admin Type"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>

              <v-flex md6>
                <v-select
                  v-model="gender"
                  :items="genderItem"
                  :hint="`${gender.value}`"
                  offset-y
                  item-text="state"
                  item-value="value"
                  label="Gender"
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              
              <v-flex md6>
                <v-btn class="btn" :disabled="!valid" type="submit">Submit</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  created() {
    // For Get User Types
    this.$ax.get("/userType").then(res => {
      let arr = { state: "Admin", value: res.data[1]._id };
      this.userTypeItem.push(arr);
      arr = { state: "Admin Master", value: res.data[2]._id };
      this.userTypeItem.push(arr);
    });

    // For Get Stations
    this.$ax.get("/station").then(res => {
      const data = res.data.result;
      for (let k in data) {
        const station = {
          state: data[k].name,
          value: data[k]._id
        };
        this.stationItem.push(station);
      }
    });
  },
  data() {
    return {
      show: false,
      valid: true,
      userType: { state: "", value: "" },
      station: { state: "", value: "" },
      gender: { state: "", value: "" },
      userTypeItem: [],
      stationItem: [],
      genderItem: [
        { state: "Male", value: "male" },
        { state: "Female", value: "female" }
      ],
      name: null,
      userName: null,
      email: null,
      phoneNumber: null,
      nationalID: null,
      password: null,
      rules: {
        required: value => !!value || "Required.",
        counter: value => value.length >= 14 || "Min 14 Number",
        min: v => v.length >= 8 || "Min 8 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        let result = {
          userType: this.userType.value,
          station: this.station.value,
          gender: this.gender.value,
          name: this.name,
          username: this.userName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          nationalID: this.nationalID,
          password: this.password
        };
        // console.log(result)
        if (this.userType.state == "Admin Master") {
          this.$ax
            .post("/admin/signup", result)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
          //hat el awel el id bta3 el ragel ely 3aml login 34an yt7at f el Team ID
        }
      }
    }
  }
};
</script>
<style scoped>
.btn {
  padding: 0 50px;
  text-align: center;
  color: white;
  background-image: linear-gradient(to right, #1dc4e9, #1de9b6);
  float: right;
  border-radius: 8px;
}
</style>
