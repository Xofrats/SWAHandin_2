<template>
  <table>
      <thead><tr><td>Type</td></tr></thead>
      <tbody>
          <tr v-for="d in personData" :key="d.time">
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
      personData: {}
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