<template>
  <div id="app">
    <DetilsNav v-if="nav_show"></DetilsNav>
    <transition name="fade">
      <router-view name="newPage"></router-view>
    </transition>
    <transition name="bounce">
      <router-view name="detailsPage"></router-view>
    </transition>
    <router-view></router-view>
    <AllFooter v-if="footer_show"></AllFooter>
  </div>
</template>

<script>
import AllFooter from './components/Footer'
import DetilsNav from './components/Nav'

export default {
  name: 'app',
  components: {
    AllFooter,
    DetilsNav
  },
  computed: {
    search_show: function () {
      let flg = this.$store.state.search_bar_show
      return flg
    },
    footer_show: function () {
      let flg = this.$store.state.footer_nav_show
      return flg
    },
    nav_show: function () {
      let flg = this.$store.state.details_nav_show
      return flg
    },
    new_post_show: function () {
      let flg = this.$store.state.new_post_show
      return flg
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
