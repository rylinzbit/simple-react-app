import * as actions from '../../constants/actions'

export function fetchDailyEnergyUsageSuccess(dailyEnergyUsage) {
  return {
    type: actions.FETCH_DAILY_ENERGY_USAGE_SUCCESS,
    dailyEnergyUsage
  }
}

export function fetchDailyEnergyUsageFail(error) {
  return {
    type: actions.FETCH_DAILY_ENERGY_USAGE_FAIL,
    error
  }
}