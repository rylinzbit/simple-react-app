import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { UI_VIEW } from '../../constants'
import InspireLogo from '../../images/Inspire.jpg'
import './styles.scss'

const Header = ({
  onSetActiveUI,
  isDailyEnergyUsageActive,
  isScoreSummaryActive
}) => {
  return(
    <section id='header'>
      <img id='inspire-logo' src={InspireLogo}/>
      <Button
        onClick={() => onSetActiveUI(UI_VIEW.SCORE_SUMMARY)}
        isActive={isScoreSummaryActive}>
        Score Summary
      </Button>
      <Button
        onClick={() => onSetActiveUI(UI_VIEW.DAILY_ENERGY_USAGE)}
        isActive={isDailyEnergyUsageActive}>
        Daily Energy Usage
      </Button>
    </section>
  )
}

Header.propTypes = {
  onSetActiveUI: PropTypes.func,
  isDailyEnergyUsageActive: PropTypes.bool,
  isScoreSummaryActive: PropTypes.bool
}

export default Header
