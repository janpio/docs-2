import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoNode from '@/images/logos/node.svg'
import logoPython from '@/images/logos/python.svg'
import logoCsharp from '@/images/logos/csharp.svg'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const libraries = [
  {
    href: '/reference/nodejs/v0',
    name: 'Node.js',
    description: 'View full API for Node.js',
    logo: logoNode,
  },
  {
    href: '/reference/python/v0',
    name: 'Python',
    description: 'View full API for Python',
    logo: logoPython,
  },
  {
    href: '/reference/csharp/v0',
    name: 'C# .NET',
    description: 'View full API for C# .NET',
    logo: logoCsharp,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="libraries">
        Libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <Link
            href={library.href}
            key={library.name}
            className="group relative flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
          >
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
            <Image
              src={library.logo}
              alt={library.name + ' Logo'}
              className="h-12 w-12"
              unoptimized
            />
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
            </div>
            <ArrowRightIcon className="h-5 w-5 -translate-x-1 transition-transform group-hover:translate-x-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}
