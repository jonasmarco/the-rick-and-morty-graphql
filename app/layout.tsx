'use client'

import type { PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import 'antd/dist/reset.css'
import { RootStyleRegistry } from '@/components/RootStyleRegistry'
import { Header } from '@/components/Header'
import { Content } from 'antd/es/layout/layout'

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/graphql'

const client = new ApolloClient({
  uri: RICK_AND_MORTY_API,
  cache: new InMemoryCache()
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <title>The Rick and Morty GraphQL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <ApolloProvider client={client}>
          <RootStyleRegistry>
            <Layout className="layout">
              <Header />
              <Content style={{ padding: '2.143em 3.571em' }}>
                {children}
              </Content>
            </Layout>
          </RootStyleRegistry>
        </ApolloProvider>
      </body>
    </html>
  )
}
