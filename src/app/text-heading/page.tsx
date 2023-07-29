import { Button, Text, Heading } from '@/components'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text/Heading | Fibonacci UI',
  description: 'UI Components from Mirador Technology',
}

export default function Home() {
  const textsToShow = {
    components: [Text, Heading],
    colors: [
      'default',
      'gray',
      'primary',
      'secondary',
      'danger',
      'success',
      'info',
      'warn',
    ],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    weights: ['thin', 'light', 'normal', 'bold', 'black'],
  } as {
    colors: ('default' | 'gray' | 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warn')[]
    components: (typeof Text | typeof Heading)[]
    sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[]
    weights: ('thin' | 'light' | 'normal' | 'bold' | 'black')[]
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-50 py-2">
      <h1 className="text-3xl font-bold text-primary-600">
        Fibonacci UI - Text/Headings
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        <Link href="/">
          <Button variant="link">{`< Voltar`}</Button>
        </Link>
      </div>
      <div className="flex  max-w-[1200px] flex-wrap justify-center gap-1 px-1">
        {textsToShow.components.map((Component) => (
          <div
            key={Component.name}
            className="flex flex-col items-center gap-2 rounded-lg p-2"
          >
            {textsToShow.colors.map((color) => (
              <div key={color} className="w-full">
                {textsToShow.weights.map((weight) => (
                  <div
                    key={weight}
                    className="flex  items-center justify-center gap-1"
                  >
                    {textsToShow.sizes.map((size) => (
                      <Component
                        color={color}
                        weight={weight}
                        size={size}
                        key={color + weight + size}
                      >
                        {Component.name} {weight} {size}.
                      </Component>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
