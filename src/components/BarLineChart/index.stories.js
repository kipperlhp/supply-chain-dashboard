import React from 'react'
import { storiesOf } from '@storybook/react'
import BarLineChart from '.'

const barDataSet = [
  {
    name: 'bar dataSet',
    data: [
      { name: 'A', value: 150 },
      { name: 'B', value: 50 },
      { name: 'C', value: 300 },
      { name: 'D', value: 230 },
      { name: 'E', value: 40 },
      { name: 'F', value: 30 },
      { name: 'G', value: 20 },
      { name: 'H', value: 80 },
      { name: 'I', value: 60 },
      { name: 'J', value: 30 },
    ]
  },
]

const lineDataSet = [
  {
    name: 'line dataSet',
    type: 'line',
    data: [
      { name: 'A', value: 150 },
      { name: 'B', value: 50 },
      { name: 'C', value: 300 },
      { name: 'D', value: 230 },
      { name: 'E', value: 40 },
      { name: 'F', value: 30 },
      { name: 'G', value: 20 },
      { name: 'H', value: 80 },
      { name: 'I', value: 60 },
      { name: 'J', value: 30 },
    ]
  },
]

const mixedDataSets = [
  {
    name: 'Set 0',
    type: 'bar',
    axis: 0,
    color: '#0000FF',
    data: [
      { name: 'A', value: 150 },
      { name: 'B', value: 50 },
      { name: 'C', value: 300 },
      { name: 'D', value: 230 },
      { name: 'E', value: 40 },
      { name: 'F', value: 30 },
      { name: 'G', value: 20 },
      { name: 'H', value: 80 },
      { name: 'I', value: 60 },
      { name: 'J', value: 30 },
    ]
  },
  {
    name: 'Set 1',
    type: 'line',
    axis: 1,
    color: '#FF0000',
    data: [
      { name: 'A', value: 51 },
      { name: 'B', value: 46 },
      { name: 'C', value: 53 },
      { name: 'D', value: 55 },
      { name: 'E', value: 53 },
      { name: 'F', value: 58 },
      { name: 'G', value: 60 },
      { name: 'H', value: 36 },
      { name: 'I', value: 46 },
      { name: 'J', value: 38 },
    ]
  },
]

storiesOf('BarLineChart', module)
  .add('default', () => (
    <BarLineChart dataSets={barDataSet} />
  ))
  .add('line', () => (
    <BarLineChart dataSets={lineDataSet} />
  ))
  .add('multiple', () => (
    <BarLineChart dataSets={mixedDataSets} />
  ))
  .add('legend & labels', () => (
    <BarLineChart dataSets={mixedDataSets} axisLabels={{ y0: 'Inventory Level', y1: 'Days of Inventory' }} enableLegend />
  )) 
  .add('vertical', () => (
    <BarLineChart dataSets={mixedDataSets} layout="vertical" axisLabels={{ x1: 'Inventory Level', x0: 'Days of Inventory' }} />
  ))

