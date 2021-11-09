<template>
  <table>
    <h1>data table</h1>
      <thead><tr><td>Type</td></tr></thead>
      <tbody>
          <tr v-for="d in data" :key="d.time">
              <td>{{ d.type }} </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  name: 'Schema',
  data() {
    return {
      data: {}
    }
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