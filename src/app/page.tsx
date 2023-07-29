import { Button } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-screen  flex-col items-center justify-center gap-4 bg-zinc-50 py-2">
      <h1 className="text-3xl font-bold text-primary-600">Fibonacci UI</h1>
      <div className="flex max-w-[886px] flex-wrap justify-between gap-6">
        <Link href="/buttons">
          <Button variant="link">Buttons</Button>
        </Link>

        <Link href="/text-heading">
          <Button variant="link">Text/Heading</Button>
        </Link>

        <Link href="/forms">
          <Button variant="link">Forms</Button>
        </Link>
      </div>
    </div>
  )
}
