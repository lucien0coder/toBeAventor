<template>
  <nav class="nav has-shadow has-text-centered is-warning" style="padding:0%;position:fixed;top: 0;width: 100%;background-color: rgb(255, 221, 87);">
      <a class="nav-item" @click="backToList">
      <span class="icon">
          <i class="fa fa-arrow-left"></i>
      </span>
      </a>
      <h2 class="subtitle" style="margin:0.8rem 1rem 1rem 7.8rem">
          <strong>{{title}}</strong>
      </h2>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      title: this.$store.state.details_nav_title
    }
  },
  methods: {
    backToList () {
      this.hiddenBar()
      this.$router.go(-1)
    },
    hiddenBar () {
      this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', true)
      this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', true)
      this.$store.dispatch('CHANGE_DETAILS_NAV_SHOW', false)
    }
  }
}
</script>
