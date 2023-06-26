import { Card, Typography } from 'antd'
const { Title } = Typography
import Link from 'next/link'

import { Episode } from '@/interfaces/Episode'

const EpisodeCard = (episode: Episode) => {
  return (
    <Link
      href={`/episode/${episode.id}`}
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <Card
        hoverable
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100%',
          wordWrap: 'break-word'
        }}
      >
        <Title level={5} style={{ marginBottom: '1em' }}>
          {episode.name}
        </Title>
        <p>Air date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
        <p>Characters: {episode.characters.length}</p>
      </Card>
    </Link>
  )
}

export default EpisodeCard
