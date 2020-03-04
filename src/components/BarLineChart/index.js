import React from 'react'
import PropTypes from 'prop-types'
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts'

const BarLineChart = ({ dataSets, layout, axisLabels, enableLegend, ...props }) => {
  const isVertical = layout === 'vertical'
  const finalData = dataSets.reduce((formattedData, dataSet, i) => {
    dataSet.data.forEach(datum => {
      const matchData = formattedData.find((formattedDatum) => formattedDatum.name === datum.name)
      if (matchData) {
        matchData[dataSet.name || `value-${i}`] = datum.value
      } else {
        const newData = { name: datum.name }
        newData[dataSet.name || `value-${i}`] = datum.value
        formattedData.push(newData)
      }
    })
    return formattedData
  }, [])
  const NameAxis = isVertical ? YAxis : XAxis
  const ValueAxis = isVertical ? XAxis : YAxis
  const valueAxisLabel0 = isVertical ? axisLabels.x0 : axisLabels.y0
  const valueAxisLabel1 = isVertical ? axisLabels.x1 : axisLabels.y1
  const nameAxisLabel = isVertical ? axisLabels.y0 : axisLabels.x0
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <ComposedChart data={finalData} layout={layout} {...props}>
        <NameAxis
          type="category"
          dataKey="name"
          padding={isVertical ? { top: 20, bottom: 20 } : { left: 20, right: 20 }}
          label={nameAxisLabel}
        />
        <ValueAxis
          type="number"
          xAxisId={isVertical ? 0 : undefined}
          yAxisId={isVertical ? undefined : 0}
          orientation={isVertical ? 'bottom' : 'left'}
          label={valueAxisLabel0}
        />
        <ValueAxis
          type="number"
          xAxisId={isVertical ? 1 : undefined}
          yAxisId={isVertical ? undefined : 1}
          orientation={isVertical ? 'top' : 'right'}
          label={valueAxisLabel1}
        />
        {dataSets.map((dataSet, i) => {
          const { type, axis, color = '#000000' } = dataSet
          const Element = (type === 'line') ? Line : Bar
          return (
            <Element
              key={i}
              dataKey={dataSet.name || `value-${i}`}
              xAxisId={isVertical ? axis : undefined}
              yAxisId={isVertical ? undefined : axis}
              barSize={(type === 'line') ? undefined : 20}
              fill={(type === 'line') ? undefined : color}
              stroke={(type === 'line') ? color : undefined}
            />
          )
        })}
        <Tooltip />
        {enableLegend && <Legend />}
        <CartesianGrid strokeDasharray="5 5" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

BarLineChart.propTypes = {
  dataSets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  axisLabels: PropTypes.object,
  enableLegend: PropTypes.bool,
}

BarLineChart.defaultProps = {
  dataSets: [],
  layout: 'horizontal',
  axisLabels: {},
  enableLegend: false,
}

export default BarLineChart
