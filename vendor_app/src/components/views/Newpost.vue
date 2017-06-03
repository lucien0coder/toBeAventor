<template>
  <section class="hero is-warning  is-fullheight" style="overflow: hidden;">
    <div class="hero-body">
      <div class="container">
          <div class="columns">
          <transition 
            v-on:enter="fc_enter"
            v-on:leave="leave"
          >
            <BtnFc v-if="new_show"></BtnFc>
          </transition>
          <div class="column has-text-centered">
          <transition 
            v-on:enter="l_enter"
            v-on:leave="leave"
          >
            <BtnL v-if="new_show"></BtnL>
          </transition>
          <transition 
            v-on:enter="c_enter"
            v-on:leave="leave"
          >
            <BtnC v-if="new_show"></BtnC>
          </transition>
          </div>
          <div class="column">
          </div>
          </div>
      </div>
    </div>
    <transition
      v-on:enter="back_enter"
      v-bind:css="false"
    >
      <NewPostBack v-if="new_show"></NewPostBack>
    </transition>
  </section>
</template>

<script>
import NewPostBack from './NewpostBack'
import Velocity from 'velocity-animate'
import BtnFc from './NewpostBTN_FC'
import BtnL from './NewpostBTN_L'
import BtnC from './NewpostBTN_C'

export default {
  components: {
    NewPostBack,
    BtnFc,
    BtnL,
    BtnC
  },
  computed: {
    new_show () {
      return this.$store.state.new_post_show
    }
  },
  methods: {
    fc_enter: function (el) {
      Velocity(el, {
        translateY: -35
      })
    },
    l_enter: function (el) {
      Velocity(el, {
        translateX: -45
      })
    },
    c_enter: function (el) {
      Velocity(el, {
        translateX: 45
      })
    },
    back_enter: function (el) {
      Velocity(el, {
        rotateZ: '360deg'
      })
    },
    leave: function (el, done) {
      Velocity(el, {
        rotateZ: '90deg',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>
