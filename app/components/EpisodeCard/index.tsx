import { Card } from 'antd'
const { Meta } = Card

import { Episode } from '@/interfaces/Episode'

const EpisodeCard = (episode: Episode) => {
  return (
    <Card hoverable style={{ height: '100%', width: '100%' }}>
      <Meta title={episode.name} style={{ marginBottom: '1em' }} />
      <p>Air date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
      <p>Characters: {episode.characters.length}</p>
    </Card>
  )
}

export default EpisodeCard
