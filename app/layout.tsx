import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '@/components/root-style-registry'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
