 <template>
  <table>
      <thead><tr><td>Type</td></tr></thead>
      <tbody>
          <tr v-for="p in persons" :key="p.id">
              <td>{{ p.type }} </td> 
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  emits: ['hire'],
  name: "Personnel",
  props: {
    persons: Array
  },
  methods: {
    hire(p) {
      this.$emit('hire', p)
    }
  }
}
</script>