 import { createApp } from 'vue'
 import Vue from 'vue'
 import App from './App.vue'
import model from './model.js'

createApp(App).mount('#app')

async function getData() {
    const data_res = await fetch('http://localhost:8080/data')
  const data = await data_res.json()
  const forecast_res = await fetch('http://localhost:8080/forecast')
  const forecast = await forecast_res.json()
  return model(data, forecast)
  }
  
  getData()
  .then(model => {
    const constr = Vue.extend(App)
    const vm = new constr()
    
    vm.model = model

   vm.$mount('#app')
    
  })

 

// var App = new Vue({
//     el: '#app',
//     data () {
//         return{
//             product: 'Socks'
//         }
//     } 
//   })

//   createApp(App).mount('#app')