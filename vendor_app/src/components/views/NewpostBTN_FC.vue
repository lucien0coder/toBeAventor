<template>
  <div class="column has-text-centered">
      <span class="icon is-large">
          <i class="fa text_border" @click="newFC">食</i>
      </span>
  </div>
</template>
<script>
export default {
  methods: {
    newFC () {
      this.$store.dispatch('CHANGE_NEW_POST_CMP_SHOW', false)
    }
  }
}
</script>
<style>
  .text_border{
    border: 0.5rem solid;
    border-color: coral;
    border-radius: 3rem;
    padding: 8px;
  }
</style>
