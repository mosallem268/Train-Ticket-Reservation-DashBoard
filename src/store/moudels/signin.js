import axios from 'axios'

const state = {
  adminData: null,
  adminToken : null,
}
const getters = {
  adminData: state=>{
    return state.adminData
  },
}
const mutations = {
}
const actions = {
  validate({ state, dispatch }, payLoad) {
    return new Promise((resolve, reject) => {
      axios
        .post("/admin/signin", payLoad)
        .then(res => {
          if (res.data.success == true) {
            // this.$store.state.views.navBar = true;
            dispatch("changeNavBarac");
            state.adminData = res.data.admin
            state.adminToken = res.data.token
            resolve(res)
          }
        }).catch(error => reject(error))
        .catch(err => console.log(err));
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}