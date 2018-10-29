import { SET_ACTIVE_UI } from '../../constants/actions'

export function setActiveUI(activeUI) {
  return {
    type: SET_ACTIVE_UI,
    activeUI
  }
}