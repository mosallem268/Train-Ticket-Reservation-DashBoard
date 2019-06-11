import Vue from 'vue'
import Vuex from 'vuex'
// import {routes} from '../routes'
import views from './moudels/views'
import users from './moudels/users'
import signin from './moudels/signin'
import signout from './moudels/signout'
// import ... from './moudels/'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  getters,
  actions,
  mutations,

  modules: {
    views,
    users,
    signin,
    signout,

  }
})