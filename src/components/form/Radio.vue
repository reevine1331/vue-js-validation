<template>
  <ul>
    <li v-for="option in data">
      <label>
        <input type="radio" v-bind:value="option.id" v-model="innerValue">
        {{ option.name }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['value', 'data'],
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  display: flex;
}
li {
  list-style: none;
  margin-right: 8px;
}
</style>
