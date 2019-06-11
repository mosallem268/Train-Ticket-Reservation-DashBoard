import HelloShow from './Vues/HelloShow.vue'
import Signin from './Vues/Signin.vue'
import Signup from './Vues/Signup.vue'
import Home from './Vues/Home.vue'
import Users from './Vues/Users.vue'
import viewUsers from './components/Users/viewUsers.vue'
import addUser from './components/Users/addUser.vue'
import updateUser from './components/Users/updateUser.vue'
import Trains from './Vues/Trains.vue'
import viewTrains from './components/Trains/viewTrains.vue'
import addTrain from './components/Trains/addTrain.vue'
import updateTrain from './components/Trains/updateTrain.vue'
import viewEmployee from './components/Employee/viewEmployees.vue'
import addEmployee from './components/Employee/addEmployee.vue'
import updateEmployee from './components/Employee/updateEmployee.vue'
import Trip from './Vues/Trip.vue'
import viewTrips from './components/Trips/viewTrips.vue'
import empTrip from './components/Trips/emp_trip.vue'
import addTrip from './components/Trips/addTrip.vue'
import updateTrip from './components/Trips/updateTrip.vue'
import viewAdminTeam from './components/Admin/viewAdminTeam.vue'
import Employee from './Vues/Employee.vue'
import Admin from './Vues/Admin.vue'

// path: '/signin',
// name: 'signin',
// components:{
// default:Signin,
// 'header-hight': Nav  <router-view name="header-view"></router-view>
// } 

//34an tool mna m4 m7tag elcomponent m4 hat4t8l (34an el app tkon msa7to a22l)          
//Lazy Loaded App insted of import every component and loaded it 
// const User =resolve =>{
//   require.ensure(['./component/pathOf Component'],()=>{
//     resolve(require('./component/pathOf Component'))
//   },'groupName')
// }
// const UserDetailes =resolve =>{
//   require.ensure(['./component/pathOf Component'],()=>{
//     resolve(require('./component/pathOf Component'))
//   },'groupName')

// const UserEdit =resolve =>{
//   require.ensure(['./component/pathOf Component'],()=>{
//     resolve(require('./component/pathOf Component'))
//   },'groupName')
// }

export const routes = [
  // base: process.env.BASE_URL,
  {
    path: '/',
    name: 'helloShow',
    component: HelloShow,
    // beforeEnter:(to,from,next)=>{
    //   console.log("elmsg hatzhr lma el route dh yigy wbas")
    //   next()
    // }
  }, 
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    //  beforeEnter:(to,from,next)=>{
    //   console.log(to,from,next)
    //   next()
    // }
  }, {
    path: '/signup',
    name: 'signup',
    component: Signup,
  }, {
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    // Done
    path: '/clients',
    name: 'clients',
    component: Users,
    children: [
      { path: '', component: viewUsers, name: 'viewUsers' },
      { path: 'createUser', component: addUser, name: 'addUser' },
      { path: 'updateUser/:idUpdateUser', component: updateUser, name: 'updateUser' },]
  }, {
    // Done
    path: '/employee',
    name: 'employee',
    component: Employee,
    children: [
      { path: '', component: viewEmployee, name: 'viewEmployee' },
      { path: 'createEmployee', component: addEmployee, name: 'addEmployee' },
      { path: 'updateEmployee/:idUpdateEmployee', component: updateEmployee, name: 'updateEmployee' },]
  }, {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      { path: 'team/:teamNID', component: viewAdminTeam, name: 'viewEmployee' },
    ]
  }, {
    // Done
    path: '/trip',
    name: 'trip',
    component: Trip,
    children: [
      { path: '', component: viewTrips, name: 'viewTrips' },
      { path: 'empTrip', component: empTrip, name: 'empTrip' },
      { path: 'createTrip', component: addTrip, name: 'addTrip' },
      { path: 'updateTrip/:idUpdateTrip', component: updateTrip, name: 'updateTrip' },]
  }, {
    // Done
    path: '/trains',
    name: 'trains',
    component: Trains,
    children: [
      { path: '', component: viewTrains, name: 'viewTrains' },
      { path: 'createTrain', component: addTrain, name: 'addTrain' },
      { path: 'updateTrain/:idUpdateTrain', component: updateTrain, name: 'updateTrain' },]
  }, {
    path: '*', redirect: '/clients'
  }
]