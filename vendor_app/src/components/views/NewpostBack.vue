<template>
  <div class="hero-foot">
    <div class="container">
      <span class="icon is-large is-pulled-right" style="padding: 0 3rem 3rem 0;" @click="backToList">
        <i class="fa  fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToList () {
      this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', true)
      this.$store.commit('CHANGE_NEW_POST_CMP_SHOW', false)
      this.$router.go(-1)
    }
  }
}
</script>
