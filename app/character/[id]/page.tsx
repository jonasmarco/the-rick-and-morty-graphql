'use client'

import React from 'react'

import { Spin, message, Image, Badge, Space, Typography, Row, Col } from 'antd'
const { Title, Text } = Typography
import { ZoomInOutlined } from '@ant-design/icons'

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { useQuery } from '@apollo/client'
import { Character } from '@/interfaces/Character'
import { Episode } from '@/interfaces/Episode'
import { GET_CHARACTER } from '@/queries/get_character'

const Character = () => {
  const params = useParams()
  const id = params.id

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const character: Character = data.character

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <div style={{ position: 'relative' }}>
        <Image
          alt={character.name}
          src={character.image}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          preview={{
            src: character.image,
            mask: <ZoomInOutlined style={{ color: 'white', fontSize: 24 }} />
          }}
        />
      </div>

      <Title>{character.name}</Title>

      <Text>
        <strong>Species:</strong> {character.species}
      </Text>
      <Text>
        <strong>Status:</strong> {character.status}
      </Text>
      <Text>
        <strong>Gender:</strong> {character.gender}
      </Text>
      <Text>
        <strong>Origin:</strong> {character.origin.name}
      </Text>
      <Text>
        <strong>Location:</strong> {character.location.name}
      </Text>

      <Title level={3}>Episode List:</Title>
      <Row gutter={[16, 16]}>
        {character.episode.map((episode: Episode, index: number) => (
          <Col key={index}>
            <Link href={`/episode/${episode.id}`} passHref>
              <Badge count={episode.name} />
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default Character
