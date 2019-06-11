import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import {store} from './store/store'
import axios from 'axios'

// Vue.prototype.$vuetify.theme={
//   primary: '#3f51b5',
//   secondary: '#b0bec5',
//   accent: '#8c9eff',
//   error: '#FFFF00'
// }
Vue.prototype.$ax = axios
Vue.config.productionTip = false

axios.defaults.baseURL='https://trainres.herokuapp.com'
// axios.defaults.header.common['Authentication'] = 'Token'



Vue.use(VueRouter);
const router =new VueRouter({
  routes, //any name :routes
  mode: 'history',

  // <div id="data"></div> // link.com/user/id?a=100&b=String#data w3awz awel mayload el page ynzl 3l div d V-243 
  // <router-link to="{path:'', hash:'#data'}"></router-link>
  // scrollBehavior(to,from,savedPosition){
  //   if(savedPosition)
  //     return savedPosition
  //   if(to.hash){
  //     return {selector :to.hash}
  //   }
  // }
}) 
// beforeEnter Router
// router.beforeEach(to,from,next)=>{
//   console.log("kol ma el route yt8ir el msg d hatzhr")
//   next();
// }

new Vue({
  router, //any name :router
  store,
  render: h => h(App),
}).$mount('#app')
