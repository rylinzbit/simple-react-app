import moment from 'moment'
import DailyEnergyUsageApi from '../../api/DailyEnergyUsageApi'
import * as actions from '../../actions/DailyEnergyUsage'

export default function fetchDailyEnergyUsage() {
  return dispatch => {
    return DailyEnergyUsageApi.fetchDailyEnergyUsage()
      .then(res => {
        const stats = res.daily_energy_usage
        let newArray

        if (stats) {
          newArray = stats.map(item => {
            const key = Object.keys(item).toString()
            return [moment(key).format('YYYY-MM-DD'), item[key]]
          })
        }

        dispatch(actions.fetchDailyEnergyUsageSuccess(newArray))
      })
      .catch(reason => {
        dispatch(actions.fetchDailyEnergyUsageFail(reason))
      })
  }
}