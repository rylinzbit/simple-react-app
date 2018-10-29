import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UI_VIEW } from '../../constants'
import fetchDailyEnergyUsage from '../../thunks/fetchDailyEnergyUsage'
import fetchScoreSummary from '../../thunks/fetchScoreSummary'
import setActiveUI from '../../thunks/setActiveUI'
import Header from '../../components/header'
import ScoreSummary from '../../components/scoreSummary'
import DailyEnergyUsage from '../../components/dailyEnergyUsage'
import './styles.scss'

class Main extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props

    dispatch(fetchDailyEnergyUsage())
    dispatch(fetchScoreSummary())
  }

  onSetActiveUI = (activeUI) => {
    this.props.dispatch(setActiveUI(activeUI))
  }

  render() {
    const { dailyEnergyUsage, scoreSummary, activeUI } = this.props

    return (
      <section id='main-wrapper'>
        <div id='styled-div'/>
        <Header
          onSetActiveUI={this.onSetActiveUI}
          isDailyEnergyUsageActive={activeUI === UI_VIEW.DAILY_ENERGY_USAGE}
          isScoreSummaryActive={activeUI ===UI_VIEW.SCORE_SUMMARY}
        />
        <ScoreSummary
          isActive={activeUI === UI_VIEW.SCORE_SUMMARY}
          score={scoreSummary.score}
          scoreText={scoreSummary.score_text}
          averageDailyEnergyUsage={scoreSummary.average_daily_energy_usage}
          averageDailyTemp={scoreSummary.average_daily_temp}
        />
        <DailyEnergyUsage
          isActive={activeUI === UI_VIEW.DAILY_ENERGY_USAGE}
          dailyEnergyUsage={dailyEnergyUsage}
        />
      </section>
    )
  }
}

Main.propTypes = {
  dailyEnergyUsage: PropTypes.arrayOf(PropTypes.array),
  scoreSummary: PropTypes.object,
  activeUI: PropTypes.number,
  dispatch: PropTypes.func
}

const mapProps = state => ({
  dailyEnergyUsage: state.dailyEnergyUsage,
  scoreSummary: state.scoreSummary,
  activeUI: state.activeUI
})

export default connect(mapProps, dispatch => ({ dispatch }))(Main)