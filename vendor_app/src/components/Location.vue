<template>
    <div class="card" style="margin-bottom: 0.2rem;">
        <div class="is-overlay has-text-centered" style="z-index: 1;margin-top: 20%;" >
            <router-link to="/selected" class="button is-warning is-outlined is-medium">
                <span @click="intoSelect">
                  <span class="icon">
                      <i class="fa fa-map-marker"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp;{{title}}
                </span>
            </router-link>
        </div>
        <LocationMark v-if="show_mark"></LocationMark>
        <div class="card-image">
            <figure class="image is-2by1">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
        </div>
    </div>
</template>
<script>
import LocationMark from './LocationMark'

export default {
  components: {
    LocationMark
  },
  data () {
    return {
      title: '番禺'
    }
  },
  computed: {
    show_mark: function () {
      let flg = this.$store.state.show_mark
      return flg
    }
  },
  methods: {
    intoSelect () {
      this.showNavbar()
      this.$store.dispatch('CHANGE_DETAILS_NAV_TITLE', '地点切换')
    },
    showNavbar () {
      this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', false)
      this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', false)
      this.$store.dispatch('CHANGE_DETAILS_NAV_SHOW', true)
    }
  }
}
</script>
