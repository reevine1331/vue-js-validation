<template>
  <select v-model="innerValue">
    <option v-for="option in data" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select>
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
select {
  height: 24px;
}
</style>
