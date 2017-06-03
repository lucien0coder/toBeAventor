import types from './mutation-types'

export default {
  [types.CHANGE_FOOTER_TAP] ({commit}, tap) {
    commit(types.CHANGE_FOOTER_TAP, tap)
  },
  [types.CHANGE_SEARCH_BAR_SHOW] ({commit}, tick) {
    commit(types.CHANGE_SEARCH_BAR_SHOW, tick)
  },
  [types.CHANGE_FOOTER_NAV_SHOW] ({commit}, tick) {
    commit(types.CHANGE_FOOTER_NAV_SHOW, tick)
  },
  [types.CHANGE_DETAILS_NAV_SHOW] ({commit}, tick) {
    commit(types.CHANGE_DETAILS_NAV_SHOW, tick)
  },
  [types.CHANGE_DETAILS_NAV_TITLE] ({commit}, title) {
    commit(types.CHANGE_DETAILS_NAV_TITLE, title)
  },
  [types.CHANGE_MARK_SHOW] ({commit}, showType) {
    commit(types.CHANGE_MARK_SHOW, showType)
  },
  [types.CHANGE_NEW_POST_CMP_SHOW] ({commit}, isNew) {
    commit(types.CHANGE_NEW_POST_CMP_SHOW, isNew)
  }
}
