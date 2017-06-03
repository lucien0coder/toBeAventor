<template>
  <span class="icon is-large">
      <i class="fa text_border" @click="new_come">尝</i>
  </span>
</template>
<script>
export default {
  methods: {
    new_come () {
      this.$store.dispatch('CHANGE_NEW_POST_CMP_SHOW', false)
    }
  }
}
</script>
