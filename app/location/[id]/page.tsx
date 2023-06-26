'use client'

import React from 'react'

import { Spin, message, Badge, Space, Typography, Row, Col } from 'antd'
const { Title, Text } = Typography

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { useQuery } from '@apollo/client'
import { Location } from '@/interfaces/Location'
import { Character } from '@/interfaces/Character'
import { GET_LOCATION } from '@/queries/get_location'

const Location = () => {
  const params = useParams()
  const id = params.id

  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const location: Location = data.location

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Title>{location.name}</Title>

      <Text>
        <strong>Type:</strong> {location.type}
      </Text>
      <Text>
        <strong>Dimension:</strong> {location.dimension}
      </Text>
      <Text>
        <strong>Residents:</strong> {location.residents.length}
      </Text>

      <Title level={3}>Residents List:</Title>
      <Row gutter={[16, 16]}>
        {location.residents.map((character: Character, index: number) => (
          <Col key={index}>
            <Link href={`/character/${character.id}`} passHref>
              <Badge count={character.name} />
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default Location
