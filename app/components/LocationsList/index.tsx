'use client'

import React from 'react'

import { Col, Row, Spin, message, Pagination } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
import Container from '@/components/Container'
import LocationCard from '@/components/LocationCard'

import { useQuery } from '@apollo/client'
import { Location } from '@/interfaces/Location'
import { GET_LOCATIONS } from '@/queries/get_locations'

const LocationsList = () => {
  const [page, setPage] = React.useState(1)
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const locations = data.locations.results
  const totalLocations = data.locations.info.count

  return (
    <Container>
      <div className="site-layout-content">
        <Title>Locations ({totalLocations})</Title>
        <Row gutter={[16, 16]}>
          {locations.map((location: Location, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <LocationCard {...location} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={page}
          onChange={(page) => setPage(page)}
          total={totalLocations}
          showSizeChanger={false}
          style={{ textAlign: 'center', marginTop: '2em' }}
        />
      </div>
    </Container>
  )
}

export default LocationsList
