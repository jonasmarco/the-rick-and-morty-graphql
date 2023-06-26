import { Card } from 'antd'
const { Meta } = Card
import Image from 'next/image'
import Link from 'next/link'

import { Character } from '@/interfaces/Character'

const CharacterCard = (character: Character) => {
  return (
    <Link href={`/character/${character.id}`}>
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
        <Meta title={character.name} style={{ marginBottom: '1em' }} />
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
