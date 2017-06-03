import types from './mutation-types'

export default {
  [types.CHANGE_FOOTER_TAP] (state, tap) {
    state.footer_tab_class = tap
  },
  [types.CHANGE_SEARCH_BAR_SHOW] (state, tick) {
    state.search_bar_show = tick
  },
  [types.CHANGE_FOOTER_NAV_SHOW] (state, tick) {
    state.footer_nav_show = tick
  },
  [types.CHANGE_DETAILS_NAV_SHOW] (state, tick) {
    state.details_nav_show = tick
  },
  [types.CHANGE_DETAILS_NAV_TITLE] (state, title) {
    state.details_nav_title = title
  },
  [types.CHANGE_MARK_SHOW] (state, showType) {
    state.show_mark = showType
  },
  [types.CHANGE_NEW_POST_CMP_SHOW] (state, isNew) {
    state.new_post_show = isNew
  }
}
