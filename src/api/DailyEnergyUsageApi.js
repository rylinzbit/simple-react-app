import axios from 'axios'

export default class DailyEnergyUsageApi {
  static fetchDailyEnergyUsage() {
    return axios({
      method:'get',
      url: 'https://stg-garcon.herokuapp.com/api/1/accounts/homescore/1/energy/usage/daily',
    })
      .then(res => res.data)
  }
}