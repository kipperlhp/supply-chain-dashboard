export const purchaseOrders = [
  { name: 'ordered', value: 90, color: 'blue' },
  { name: 'delivered', value: 8, color: 'orange' },
]

export const outboundShipments = [
  { name: 'delivered', value: 25, color: 'blue' },
  { name: 'arrived airport', value: 15, color: 'orange' },
]

export const inboundShipments = [
  { name: 'arrived inbound airport', value: 22, color: 'blue' },
  { name: 'arrived warehouse', value: 11, color: 'orange' },
]

export const salesOrders = [
  { name: 'customer order', value: 1, color: 'blue' },
  { name: 'delivered', value: 3, color: 'orange' },
]

export const inventoryDataSets = [
  {
    name: 'Inventory',
    type: 'bar',
    axis: 0,
    color: '#0000FF',
    data: [
      { name: 'Product 1', value: 150 },
      { name: 'Product 2', value: 50 },
      { name: 'Product 3', value: 300 },
      { name: 'Product 4', value: 230 },
      { name: 'Product 5', value: 40 },
      { name: 'Product 6', value: 30 },
      { name: 'Product 7', value: 20 },
      { name: 'Product 8', value: 80 },
      { name: 'Product 9', value: 60 },
      { name: 'Product 10', value: 30 },
    ]
  },
  {
    name: 'Days of Inventory',
    type: 'line',
    axis: 1,
    color: '#FF0000',
    data: [
      { name: 'Product 1', value: 51 },
      { name: 'Product 2', value: 46 },
      { name: 'Product 3', value: 53 },
      { name: 'Product 4', value: 55 },
      { name: 'Product 5', value: 53 },
      { name: 'Product 6', value: 58 },
      { name: 'Product 7', value: 60 },
      { name: 'Product 8', value: 36 },
      { name: 'Product 9', value: 46 },
      { name: 'Product 10', value: 38 },
    ]
  },
]

export const avgLeadTimeDataSet = [
  {
    name: 'Days',
    color: '#0000FF',
    data: [
      { name: 'Arrive Customer address to Goods Receipt', value: 0.03 },
      { name: 'Pick to Arrive Customer address', value: 0.8 },
      { name: 'Customer Order to Pick', value: 0.5 },
      { name: 'Arrive Inbound Airport to warehouse', value: 0.3 },
      { name: 'Arrive Outbound Airport to Arrive Inbound Airport', value: 0.4 },
      { name: 'Exit Factory to Arrive Outbound Airport', value: 0.7 },
      { name: 'Confirmation to Exit Factory', value: 14 },
    ]
  },
]
