import { Button } from '@/components'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buttons | Fibonacci UI',
  description: 'UI Components from Mirador Technology',
}
export default function Home() {
  const buttonsToShow = {
    colors: ['primary', 'secondary', 'danger', 'success', 'info', 'warn'],
    variants: ['solid', 'outline', 'gradient', 'link'],
    sizes: ['xs', 'sm', 'md', 'lg'],
  } as {
    variants: ("link" | "solid" | "outline" | "gradient" | undefined)[];
    colors: ('primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warn')[];
    sizes: ('xs' | 'sm' | 'md' | 'lg')[];
  }

  return (
    <div className="flex h-full w-full  flex-col items-center justify-center gap-4 bg-zinc-50 py-2">
      <h1 className="text-3xl font-bold text-primary-600">
        Fibonacci UI - Buttons
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        <Link href="/">
          <Button variant="link">{`< Voltar`}</Button>
        </Link>
      </div>
      <div className="flex max-w-[1340px] flex-wrap justify-between gap-6">
        {buttonsToShow.colors.map((color) => (
          <div
            key={color}
            className="flex flex-col items-center gap-2 rounded-lg border-2 border-solid p-2"
          >
            <p className="text-slate-600">Button {color}</p>
            {buttonsToShow.variants.map((variant) => (
              <div key={variant} className="w-full">
                <p className="text-sm text-slate-600">{variant}</p>
                <div className="flex  items-center justify-center gap-1">
                  {buttonsToShow.sizes.map((size) => (
                    <Button
                      key={color + variant + size}
                      variant={variant}
                      color={color}
                      size={size}
                    >
                      click me!
                    </Button>
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full">
              <p className="text-sm text-slate-600">disabled</p>
              <div className="flex  items-center justify-center gap-1">
                {buttonsToShow.variants.map((variant) => (
                  <Button
                    key={color + variant}
                    variant={variant}
                    color={color}
                    disabled
                  >
                    click me!
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm text-slate-600">width block</p>

              <div className="flex flex-col items-center justify-center gap-2">
                {buttonsToShow.variants.map((variant) => (
                  <Button
                    key={color + variant}
                    variant={variant}
                    color={color}
                    block
                  >
                    click me!
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
