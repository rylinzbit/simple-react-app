import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const ScoreSummary = ({
  isActive,
  score,
  scoreText,
  averageDailyEnergyUsage,
  averageDailyTemp 
}) => {
  if (!isActive || !score) {
    return null
  }

  return (
    <section id='score-summary-wrapper'>
      <div id='outer-square'>
        <div id='inner-square'>
          <h2 className='home-score'>{score}</h2>
        </div>
      </div>
      <p className='score-text'>{scoreText}</p>
      <p>Average daily energy usage: <span>{averageDailyEnergyUsage}</span></p>
      <p>Average daily temp: <span>{averageDailyTemp}</span></p>
    </section>
  )
}

ScoreSummary.propTypes = {
  isActive: PropTypes.bool,
  score: PropTypes.number,
  scoreText: PropTypes.string,
  averageDailyEnergyUsage: PropTypes.number,
  averageDailyTemp: PropTypes.number
}

export default ScoreSummary
