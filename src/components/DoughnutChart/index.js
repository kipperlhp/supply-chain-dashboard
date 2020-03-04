import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Pie, PieChart, Label, ResponsiveContainer, Cell, Tooltip } from 'recharts'

const Title = styled.div`
  font-weight: bold;
  font-size: 1rem;
`

const DoughnutChart = ({ data, title, ...props }) => {
  const total = data.reduce((subtotal, datum) => subtotal + datum.value, 0)
  return (
    <Flex flexDirection="column" alignItems="center">
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius="90%"
            innerRadius="75%"
            startAngle={450}
            endAngle={90}
            paddingAngle={2}
            {...props}
          >
            {data.map((datum, i) => (
              <Cell
                key={i}
                fill={datum.color}
              />
            ))}
            <Label position="center">{total}</Label>
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  )
}

DoughnutChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

DoughnutChart.defaultProps = {
  data: [],
  title: '',
}

export default DoughnutChart
