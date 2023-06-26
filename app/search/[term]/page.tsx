'use client'

import React from 'react'

import { Col, Row, Spin, message } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
import Container from '@/components/Container'
import CharacterCard from '@/components/CharacterCard'
import EpisodeCard from '@/components/EpisodeCard'
import LocationCard from '@/components/LocationCard'

import { useParams } from 'next/navigation'

import { Character } from '@/interfaces/Character'
import { Episode } from '@/interfaces/Episode'
import { Location } from '@/interfaces/Location'

import { useQuery } from '@apollo/client'
import { SEARCH_CHARACTERS } from '@/queries/search_characters'
import { SEARCH_EPISODES } from '@/queries/search_episodes'
import { SEARCH_LOCATIONS } from '@/queries/search_locations'

const Search = () => {
  const params = useParams()
  const term = params.term

  const {
    loading: charactersLoading,
    error: charactersError,
    data: charactersData
  } = useQuery(SEARCH_CHARACTERS, { variables: { name: term } })

  const {
    loading: episodesLoading,
    error: episodesError,
    data: episodesData
  } = useQuery(SEARCH_EPISODES, { variables: { name: term } })

  const {
    loading: locationsLoading,
    error: locationsError,
    data: locationsData
  } = useQuery(SEARCH_LOCATIONS, { variables: { name: term } })

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
        {/* Characters */}
        <Title level={3}>{`Characters found with "${term}"`}</Title>
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
          {`Episodes found with "${term}"`}
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
          {`Locations found with "${term}"`}
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

export default Search
