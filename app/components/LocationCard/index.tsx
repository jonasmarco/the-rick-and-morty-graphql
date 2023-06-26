import { Card, Typography } from 'antd'
const { Title } = Typography
import Link from 'next/link'

import { Location } from '@/interfaces/Location'

const LocationCard = (location: Location) => {
  return (
    <Link
      href={`/location/${location.id}`}
      style={{
        display: 'flex',
        alignItems: 'stretch',
        width: '100%'
      }}
    >
      <Card
        hoverable
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100%',
          wordWrap: 'break-word'
        }}
      >
        <Title level={5} style={{ marginBottom: '1em' }}>
          {location.name}
        </Title>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Residents: {location.residents.length}</p>
      </Card>
    </Link>
  )
}

export default LocationCard
