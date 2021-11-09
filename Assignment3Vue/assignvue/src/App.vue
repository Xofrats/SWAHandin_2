<template>
<div>
  <h1>Weather data </h1>
  <table>
        <thead><tr><td>Type</td></tr></thead>
        <tbody>
            <tr v-for="d in personData" :key="d.time">
                <td>{{ d.type }} </td>
            </tr>
        </tbody>
    </table>
      <div id="app"></div>

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      model: {}
    }
  },
    computed: {
    measures() { return this.model.latestMeasurement() }
  },
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
