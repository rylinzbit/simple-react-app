import * as actions from '../../actions/ActiveUI'

export default function setActiveUI(activeUI) {
  return dispatch => {
    dispatch(actions.setActiveUI(activeUI))
  }
}