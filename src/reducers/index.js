import * as actionConstants from '../constants/actions'
import { UI_VIEW } from '../constants'

export const initialState = {
  activeUI: UI_VIEW.SCORE_SUMMARY,
  dailyEnergyUsage: [],
  scoreSummary: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.FETCH_DAILY_ENERGY_USAGE_SUCCESS:
      return Object.assign({}, state, {
        dailyEnergyUsage: action.dailyEnergyUsage
      })

    case actionConstants.FETCH_DAILY_ENERGY_USAGE_FAIL:
      return Object.assign({}, state, {
        ...state,
        fetchDailyEnergyUsageError: action.error
      })

    case actionConstants.FETCH_SCORE_SUMMARY_SUCCESS:
      return Object.assign({}, state, {
        scoreSummary: action.scoreSummary
      })

    case actionConstants.FETCH_SCORE_SUMMARY_FAIL:
      return Object.assign({}, state, {
        ...state,
        fetchScoreSummaryError: action.error
      })

    case actionConstants.SET_ACTIVE_UI:
      return Object.assign({}, state, {
        activeUI: action.activeUI
      })

    default:
      return state
  }
}

export default reducer