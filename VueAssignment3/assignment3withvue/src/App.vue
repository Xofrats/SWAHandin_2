<template>
<div>
  <h1>Weather data</h1>
  <div id="dynamic-component-demo" class="demo">
    <h1>Latest measures</h1>
    <personnel :measures='measures' @update='update'/>
  </div>

  <div id="dynamic-component-demo" class="demo">
    <h1>Minimum temperature for the last 5 days</h1>
    <personnel :measures='minTemp' @update='update'/>
  </div>

  <div id="dynamic-component-demo" class="demo">
    <h1>Maximum temperature for the last 5 days</h1>
    <personnel :measures='maxTemp' @update='update'/>
  </div>

   <div id="dynamic-component-demo" class="demo">
    <h1>Total precipitation for the last 5 days</h1>
    <computedDataTable :measures='totalPrecipitation' @update='update'/>
  </div>

   <div id="dynamic-component-demo" class="demo">
    <h1>Average wind speed for the last 5 days</h1>
    <computedDataTable :measures='avgWindspeed' @update='update'/>
  </div>

   <div id="dynamic-component-demo" class="demo">
    <h1>Hourly predictions for the next 24 hours.</h1>
    <personnel :measures='hourlyPrediction' @update='update'/>
  </div>
</div>
</template>

<script>
import Personnel from "@/components/Personnel"
import computedDataTable from "@/components/computedDataTable"

export default {
  name: 'App',
  data() {
    return {
      model: {}
    }
  },
  computed: {
    measures() { return this.model.latestMeasures() },
    minTemp() { return this.model.minTemp() },
    maxTemp() { return this.model.maxTemp() },
    totalPrecipitation() { return this.model.totalPrecipitation() },
    avgWindspeed() { return this.model.avgWindspeed() },
    hourlyPrediction() { return this.model.hourlyPrediction() }
  },
  methods: {
    async update() {
        const data_res = await fetch('http://localhost:8080/data')
        const data = await data_res.json()
        const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())
        this.model = this.model.updateModel(data, forecasts)
      } 
  },
  components: {
    Personnel,
    computedDataTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>