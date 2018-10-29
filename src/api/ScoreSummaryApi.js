import axios from 'axios'

export default class ScoreSummaryApi {
  static fetchScoreSummary() {
    return axios({
      method: 'get',
      url:'https://stg-garcon.herokuapp.com/api/1/accounts/homescore/1/summary',
    })
      .then(res => res.data)
  }
}