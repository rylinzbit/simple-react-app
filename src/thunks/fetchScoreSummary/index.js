import ScoreSummaryApi from '../../api/ScoreSummaryApi'
import * as actions from '../../actions/ScoreSummary'

export default function fetchScoreSummary() {
  return dispatch => {
    return ScoreSummaryApi.fetchScoreSummary()
      .then(res => {
        dispatch(actions.fetchScoreSummarySuccess(res))
      })
      .catch(reason => {
        dispatch(actions.fetchScoreSummaryFail(reason))
      })
  }
}
