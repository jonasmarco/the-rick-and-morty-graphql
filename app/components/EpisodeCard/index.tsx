import { Card } from 'antd'
const { Meta } = Card
import Link from 'next/link'

import { Episode } from '@/interfaces/Episode'

const EpisodeCard = (episode: Episode) => {
  return (
    <Link href={`/episode/${episode.id}`}>
      <Card hoverable style={{ height: '100%', width: '100%' }}>
        <Meta title={episode.name} style={{ marginBottom: '1em' }} />
        <p>Air date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
        <p>Characters: {episode.characters.length}</p>
      </Card>
    </Link>
  )
}

export default EpisodeCard
