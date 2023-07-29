import { Button } from '@/components'

import { Metadata } from 'next'
import Link from 'next/link'
import { FormContent } from './components/FormContent'

export const metadata: Metadata = {
  title: 'Forms | Fibonacci UI',
  description: 'UI Components from Mirador Technology',
}

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-50 py-2">
      <h1 className="text-3xl font-bold text-primary-600">
        Fibonacci UI - Forms
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        <Link href="/">
          <Button variant="link">{`< Voltar`}</Button>
        </Link>
      </div>
      <FormContent />
    </div>
  )
}
