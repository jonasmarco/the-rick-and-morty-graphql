'use client'

import { Layout, Menu, Input, Row, Col } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const { Search } = Input
import * as S from './styles'

export const Header = () => {
  const router = useRouter()

  const { Header } = Layout

  const menuItems = [
    {
      key: '/',
      label: 'Home'
    },
    {
      key: 'characters',
      label: 'Characters'
    },
    {
      key: 'episodes',
      label: 'Episodes'
    },
    {
      key: 'locations',
      label: 'Locations'
    }
  ]

  return (
    <Header style={{ height: 'auto' }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <S.ResponsiveTitle
          xs={24}
          lg={8}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <h1 style={{ color: 'white', marginBottom: '0' }}>
            Rick and Morty GraphQL
          </h1>
        </S.ResponsiveTitle>
        <Col xs={24} lg={8} style={{ display: 'flex', alignItems: 'center' }}>
          <Search
            placeholder="Search characters"
            onSearch={(term) => router.push(`/search/${term}`)}
          />
        </Col>
        <S.ResponsiveMenu xs={24} lg={8}>
          <Menu theme="dark" mode="horizontal">
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link href={`/${item.key}`}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </S.ResponsiveMenu>
      </Row>
    </Header>
  )
}
