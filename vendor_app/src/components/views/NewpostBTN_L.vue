<template>
  <span class="icon is-large">
      <i class="fa text_border" @click="new_look">寻</i>
  </span>
</template>
<script>
export default {
  methods: {
    new_look () {
      this.$store.dispatch('CHANGE_NEW_POST_CMP_SHOW', false)
    }
  }
}
</script>
