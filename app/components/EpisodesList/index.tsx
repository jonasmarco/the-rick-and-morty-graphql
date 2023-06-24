'use client'

import React from 'react'

import { Col, Row, Spin, message, Pagination } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
import Container from '@/components/Container'
import EpisodeCard from '@/components/EpisodeCard'

import { useQuery } from '@apollo/client'

import { Episode } from '@/interfaces/Episode'

import { GET_EPISODES } from '@/queries/get_episodes'

const EpisodesList = () => {
  const [page, setPage] = React.useState(1)
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const episodes = data.episodes.results
  const totalEpisodes = data.episodes.info.count

  return (
    <Container>
      <div className="site-layout-content">
        <Title>Episodes ({totalEpisodes})</Title>
        <Row gutter={[16, 16]}>
          {episodes.map((episode: Episode, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <EpisodeCard {...episode} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={page}
          onChange={(page) => setPage(page)}
          total={totalEpisodes}
          showSizeChanger={false}
          style={{ textAlign: 'center', marginTop: '2em' }}
        />
      </div>
    </Container>
  )
}

export default EpisodesList
