import { Card } from 'antd'
const { Meta } = Card

import { Location } from '@/interfaces/Location'

const LocationCard = (location: Location) => {
  return (
    <Card hoverable style={{ height: '100%', width: '100%' }}>
      <Meta title={location.name} style={{ marginBottom: '1em' }} />
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {location.residents.length}</p>
    </Card>
  )
}

export default LocationCard
