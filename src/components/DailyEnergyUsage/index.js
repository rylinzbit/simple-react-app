import React from 'react'
import { format } from 'd3-format'
import PropTypes from 'prop-types'
import { TimeSeries, Index } from 'pondjs'
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler,
  Resizable
} from 'react-timeseries-charts'
import './styles.scss'

export default class DailyEnergyUsage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      highlight: null
    }
  }

  render() {
    const { isActive, dailyEnergyUsage } = this.props

    if (!isActive) {
      return null
    }
    
    // configuration for react-timeseries-chart

    const series = new TimeSeries({
      name: 'Daily Energy Usage',
      utc: false,
      columns: ['index', 'usage'],
      points: dailyEnergyUsage.map(([d, value]) => [
        Index.getIndexString('24h', new Date(d)), value
      ])
    })

    const style = styler([{ key: 'usage', color: '#A5C8E1', selected: '#2CB1CF' }])

    const formatter = format('.2s')
    const highlight = this.state.highlight
    let infoValues = []

    if (highlight) {
      const usageText = `${formatter(highlight.event.get(highlight.column))}`
      infoValues = [{ label: 'Usage', value: usageText }]
    }

    return (
      <div id='daily-energy-usage'>
        <p className='title'>Your daily energy usage:</p>
        <div id='bar-chart-wrapper'>
          <Resizable>
            <ChartContainer
              timeRange={series.timerange()}
              format="day"
              enablePanZoom={true}
              >
              <ChartRow height="200">
                <YAxis
                  id="usage"
                  label="Energy Usage"
                  min={0}
                  max={110}
                  format=".2f"
                  width="70"
                  type="linear"/>
                <Charts>
                  <BarChart
                    axis="usage"
                    style={style}
                    spacing={2}
                    columns={['usage']}
                    series={series}
                    info={infoValues}
                    infoTimeFormat="%b %d %Y"
                    minBarHeight={1}
                    highlighted={this.state.highlight}
                    onHighlightChange={highlight =>
                      this.setState({ highlight })
                    }
                  />
                </Charts>
              </ChartRow>
            </ChartContainer>
          </Resizable>
        </div>
      </div>
    )
  }
}

DailyEnergyUsage.propTypes = {
  isActive: PropTypes.bool,
  dailyEnergyUsage: PropTypes.arrayOf(PropTypes.array)
}
