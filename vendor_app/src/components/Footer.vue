<template>
    <footer id="footer" class="footer" style="padding:0%;position: fixed;bottom: 0;width: 100%;">
      <div class="tabs is-toggle is-fullwidth ">
          <ul>
              <li v-bind:class="{'is-active': f_tap}" @click="changeFooterTap(0)">
              <router-link to="/">
                  <span class="icon"><i class="fa fa-motorcycle"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': l_tap}" @click="changeFooterTap(1)">
              <router-link to="/looking">
                  <span class="icon">『尋』</span>
              </router-link>
              </li>
              <li @click="changeFooterTap(2)">
              <router-link to="/newpost">
                  <span class="icon"><i class="fa fa-pencil"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': t_tap}" @click="changeFooterTap(3)">
              <router-link to="/track">
                  <span class="icon"><i class="fa fa-road"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': m_tap}" @click="changeFooterTap(4)">
              <router-link to="/mine">
                  <span class="icon"><i class="fa fa-user-circle"></i></span>
              </router-link>
              </li>
          </ul>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  computed: {
    f_tap: function () {
      let flg = this.$store.state.footer_tab_class === 0 && true || false
      return flg
    },
    l_tap: function () {
      let flg = this.$store.state.footer_tab_class === 1 && true || false
      return flg
    },
    n_tap: function () {
      let flg = this.$store.state.footer_tab_class === 2 && true || false
      return flg
    },
    t_tap: function () {
      let flg = this.$store.state.footer_tab_class === 3 && true || false
      return flg
    },
    m_tap: function () {
      let flg = this.$store.state.footer_tab_class === 4 && true || false
      return flg
    }
  },
  methods: {
    changeFooterTap (tap) {
      if (tap === 2) {
        this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', false)
        this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', false)
        this.$store.dispatch('CHANGE_NEW_POST_CMP_SHOW', true)
        tap = this.$store.state.footer_tab_class
      } else if (tap === 4) {
        this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', false)
      } else {
        let smf = tap === 0 && true || tap === 1 && false
        this.$store.dispatch('CHANGE_MARK_SHOW', smf)
        this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', true)
        this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', true)
      }
      this.$store.dispatch('CHANGE_FOOTER_TAP', tap)
    }
  }
}
</script>
