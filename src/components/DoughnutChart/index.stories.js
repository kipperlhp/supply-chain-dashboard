import React from 'react'
import { storiesOf } from '@storybook/react'
import DoughnutChart from '.'

const testData = [
  { name: 'A', value: 60, color: 'blue' },
  { name: 'B', value: 10, color: 'orange' },
  { name: 'C', value: 28, color: 'green' },
];

storiesOf('DoughnutChart', module)
  .add('default', () => (
    <DoughnutChart title="Purchase Prder" data={testData} />
  ))
