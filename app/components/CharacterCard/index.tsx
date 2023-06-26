import { Card, Typography } from 'antd'
const { Title } = Typography
import Image from 'next/image'
import Link from 'next/link'

import { Character } from '@/interfaces/Character'

const CharacterCard = (character: Character) => {
  return (
    <Link href={`/character/${character.id}`} style={{ width: '100%' }}>
      <Card
        hoverable
        style={{ height: '100%', width: '100%' }}
        cover={
          <Image
            alt={character.name}
            src={character.image}
            quality={100}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        }
      >
        <Title level={5} style={{ marginBottom: '1em' }}>
          {character.name}
        </Title>
        <p>Status: {character.status}</p>
        <p>
          Gender: {character.gender} - {character.species}
        </p>
        <p>Origin: {character.origin.name}</p>
      </Card>
    </Link>
  )
}

export default CharacterCard
