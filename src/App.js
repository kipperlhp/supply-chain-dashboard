import React from 'react'
import { Box, Flex } from '@rebass/grid'
import DoughnutChart from './components/DoughnutChart'
import BarLineChart from './components/BarLineChart'
import './App.css'
import {
  purchaseOrders,
  outboundShipments,
  inboundShipments,
  salesOrders,
  inventoryDataSets,
  avgLeadTimeDataSet,
} from './datasets'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      purchaseOrders: [],
      outboundShipments: [],
      inboundShipments: [],
      salesOrders: [],
      inventoryDataSets: [],
      avgLeadTimeDataSet: [],
    }
  }

  setPurchaseOrders = (orders) => {
    this.setState({ purchaseOrders: orders })
  }

  setOutboundShipments = (shipments) => {
    this.setState({ outboundShipments: shipments })
  }
  
  setInboundShipments = (shipments) => {
    this.setState({ inboundShipments: shipments })
  }

  setSalesOrders = (orders) => {
    this.setState({ salesOrders: orders })
  }

  setInventoryDataSets = (dataSets) => {
    this.setState({ inventoryDataSets: dataSets })
  }

  setAvgLeadTimeDataSet = (dataSets) => {
    this.setState({ avgLeadTimeDataSet: dataSets })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setPurchaseOrders(purchaseOrders)
      this.setOutboundShipments(outboundShipments)
      this.setInboundShipments(inboundShipments)
      this.setSalesOrders(salesOrders)
      this.setInventoryDataSets(inventoryDataSets)
      this.setAvgLeadTimeDataSet(avgLeadTimeDataSet)
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Supply Chain Performance Dashboard
        </header>
        <Box style={{ maxWidth: 1024, margin: '0 auto' }}>
          <Flex mt="1rem" flexWrap="wrap" px="1rem">
            <Box width={[1, 1 / 2, 1 / 4]}>
              <DoughnutChart title="Purchase Order" data={this.state.purchaseOrders} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 4]}>
              <DoughnutChart title="Outbound Shipment" data={this.state.outboundShipments} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 4]}>
              <DoughnutChart title="Inbound Shipment" data={this.state.inboundShipments} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 4]}>
              <DoughnutChart title="Sales Order" data={this.state.salesOrders} />
            </Box>
          </Flex>
          <Flex mt="2rem" p="1rem">
            <BarLineChart
              dataSets={this.state.inventoryDataSets}
              axisLabels={{ y0: 'Inventory Level', y1: 'Days of Inventory' }}
              enableLegend
            />
          </Flex>
          <Flex my="2rem" p="1rem">
            <BarLineChart
              dataSets={this.state.avgLeadTimeDataSet}
              layout="vertical"
              axisLabels={{ x0: 'Day(s)' }}
            />
          </Flex>
        </Box>
      </div>
    )
  }
}

export default App
