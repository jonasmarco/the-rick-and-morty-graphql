'use client'

import React from 'react'

import { Col, Row, Spin, message, Pagination } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
import Container from '@/components/Container'
import CharacterCard from '@/components/CharacterCard'

import { useQuery } from '@apollo/client'
import { Character } from '@/interfaces/Character'
import { GET_CHARACTERS } from '@/queries/get_characters'

const CharactersList = () => {
  const [page, setPage] = React.useState(1)
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page }
  })

  React.useEffect(() => {
    if (error) {
      message.error(`An error occurred: ${error.message}`)
    }
  }, [error])

  if (loading) return <Spin size="large" />

  const characters = data.characters.results
  const totalCharacters = data.characters.info.count

  return (
    <Container>
      <div className="site-layout-content">
        <Title>Characters ({totalCharacters})</Title>
        <Row gutter={[16, 16]}>
          {characters.map((character: Character, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <CharacterCard {...character} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={page}
          onChange={(page) => setPage(page)}
          total={totalCharacters}
          pageSize={20}
          showSizeChanger={false}
          style={{ textAlign: 'center', marginTop: '2em' }}
        />
      </div>
    </Container>
  )
}

export default CharactersList
