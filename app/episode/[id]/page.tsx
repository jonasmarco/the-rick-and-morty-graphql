'use client'

import React from 'react'

import { Spin, message, Badge, Space, Typography, Row, Col } from 'antd'
const { Title, Text } = Typography

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { useQuery } from '@apollo/client'
import { Episode } from '@/interfaces/Episode'
import { GET_EPISODE } from '@/queries/get_episode'

const Episode = () => {
  const params = useParams()
  const id = params.id

  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const episode = data.episode

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Title>{episode.name}</Title>

      <Text>
        <strong>Air Date:</strong> {episode.air_date}
      </Text>
      <Text>
        <strong>Episode:</strong> {episode.episode}
      </Text>
      <Text>
        <strong>Characters:</strong> {episode.characters.length}
      </Text>

      <Title level={3}>Character List:</Title>
      <Row gutter={[16, 16]}>
        {episode.characters.map((episode: Episode, index: number) => (
          <Col key={index}>
            <Link href={`/character/${episode.id}`} passHref>
              <Badge count={episode.name} />
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default Episode
