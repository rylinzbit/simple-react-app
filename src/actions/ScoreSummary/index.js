import * as actions from '../../constants/actions'

export function fetchScoreSummarySuccess(scoreSummary) {
  return {
    type: actions.FETCH_SCORE_SUMMARY_SUCCESS,
    scoreSummary
  }
}

export function fetchScoreSummaryFail(error) {
  return {
    type: actions.FETCH_SCORE_SUMMARY_FAIL,
    error
  }
}