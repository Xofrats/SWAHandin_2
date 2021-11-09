import Vue from 'vue'
import App from './App.vue'
import model from './model.js'

//Vue.config.productionTip = false
//Vue.prototype.$window = window

async function getData() {
    const data_res = await fetch('http://localhost:8080/data')
    const data = await data_res.json()
    const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())
  return model(data, forecasts)
}

getData()
.then(model => {
  const constr = Vue.extend(App)
  const vm = new constr()
  
  vm.model = model
  
  vm.$mount('#app')
})