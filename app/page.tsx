'use client'

import React from 'react'

import { Col, Row, Spin, message } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
import Container from '@/components/Container'
import CharacterCard from '@/components/CharacterCard'
import EpisodeCard from '@/components/EpisodeCard'
import LocationCard from '@/components/LocationCard'

import { useQuery } from '@apollo/client'

import { Character } from '@/interfaces/Character'
import { Episode } from '@/interfaces/Episode'
import { Location } from '@/interfaces/Location'

import { GET_CHARACTERS } from '@/queries/get_character'
import { GET_EPISODES } from '@/queries/get_episodes'
import { GET_LOCATIONS } from '@/queries/get_locations'

export default function Home() {
  const {
    loading: charactersLoading,
    error: charactersError,
    data: charactersData
  } = useQuery(GET_CHARACTERS)

  const {
    loading: episodesLoading,
    error: episodesError,
    data: episodesData
  } = useQuery(GET_EPISODES)

  const {
    loading: locationsLoading,
    error: locationsError,
    data: locationsData
  } = useQuery(GET_LOCATIONS)

  React.useEffect(() => {
    if (charactersError || episodesError || locationsError) {
      message.error(
        `An error occurred: ${
          charactersError?.message ||
          episodesError?.message ||
          locationsError?.message
        }`
      )
    }
  }, [charactersError, episodesError, locationsError])

  if (charactersLoading || episodesLoading || locationsLoading)
    return <Spin size="large" />

  return (
    <Container>
      <div className="site-layout-content">
        <Title>Welcome to Rick and Morty GraphQl App!</Title>
        {/* Characters */}
        <Title level={3}>Featured Characters</Title>
        <Row gutter={[16, 16]}>
          {charactersData.characters.results
            .slice(0, 8)
            .map((character: Character, index: number) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={index}
                style={{ display: 'flex' }}
              >
                <CharacterCard {...character} />
              </Col>
            ))}
        </Row>
        {/* Episodes */}
        <Title level={3} style={{ marginTop: '1em' }}>
          Featured Episodes
        </Title>
        <Row gutter={[16, 16]}>
          {episodesData.episodes.results
            .slice(0, 8)
            .map((episode: Episode, index: number) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={index}
                style={{ display: 'flex' }}
              >
                <EpisodeCard {...episode} />
              </Col>
            ))}
        </Row>
        {/* Locations */}
        <Title level={3} style={{ marginTop: '1em' }}>
          Featured Locations
        </Title>
        <Row gutter={[16, 16]}>
          {locationsData.locations.results
            .slice(0, 8)
            .map((location: Location, index: number) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={index}
                style={{ display: 'flex' }}
              >
                <LocationCard {...location} />
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  )
}
