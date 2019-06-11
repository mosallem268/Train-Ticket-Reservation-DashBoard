import axios from 'axios'
const state={
  userData: {},
  show: false
}
const getters={
  stateShow:state=>{
    return state.show
  },
  userDataShow:state=>{
    return state.userData
  }
}
const mutations={
  stateUser(state,userData){
    state.userData = userData
  }
}
const actions={
  getUser({commit} , nationalID){
    // this.$ax
    axios
      .get(`/user/search/${nationalID}`)
      .then(res => {
        const data = res.data.result[0];
        // this.userData = data;
        commit('stateUser',data)
      })
      // .then(() => {
      //   this.show = true;
      // });
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}