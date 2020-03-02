import React from 'react'
import PropTypes from 'prop-types'
import { ComposedChart, XAxis, YAxis, Bar, Line, ResponsiveContainer } from 'recharts'


const BarLineChart = ({ dataSets, layout, ...props }) => {
  const isVertical = layout === 'vertical'
  const finalData = dataSets.reduce((formattedData, dataSet, i) => {
    dataSet.data.forEach(datum => {
      const matchData = formattedData.find((formattedDatum) => formattedDatum.name === datum.name)
      if (matchData) {
        matchData[`value-${i}`] = datum.value
      } else {
        const newData = { name: datum.name }
        newData[`value-${i}`] = datum.value
        formattedData.push(newData)
      }
    })
    return formattedData
  }, [])
  const NameAxis = isVertical ? YAxis : XAxis
  const ValueAxis = isVertical ? XAxis : YAxis
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={finalData} layout={layout} {...props}>
        <NameAxis
          type="category"
          dataKey="name"
          padding={isVertical ? { top: 30, bottom: 30 } : { left: 30, right: 30 }}
        />
        <ValueAxis
          type="number"
          xAxisId={isVertical ? 0 : undefined}
          yAxisId={isVertical ? undefined : 0}
          orientation={isVertical ? 'bottom' : 'left'}
        />
        <ValueAxis
          type="number"
          xAxisId={isVertical ? 1 : undefined}
          yAxisId={isVertical ? undefined : 1}
          orientation={isVertical ? 'top' : 'right'}
        />
        {dataSets.map((dataSet, i) => {
          const { type, axis, color } = dataSet
          const Element = (type === 'line') ? Line : Bar
          return (
            <Element
              key={i}
              dataKey={`value-${i}`}
              xAxisId={isVertical ? axis : undefined}
              yAxisId={isVertical ? undefined : axis}
              barSize={(type === 'line') ? undefined : 20}
              fill={(type === 'line') ? undefined : color}
              stroke={(type === 'line') ? color : undefined}
            />
          )
        })}
      </ComposedChart>
    </ResponsiveContainer>
  )
}

BarLineChart.propTypes = {
  dataSets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.oneOf(['horizontal', 'vertical'])
}

BarLineChart.defaultProps = {
  dataSets: [],
  layout: 'horizontal',
}

export default BarLineChart
