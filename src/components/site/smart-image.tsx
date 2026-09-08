'use client'

import Image, { ImageProps } from 'next/image'
import blurs from '../../lib/image-blur.json'

const blurMap = blurs as Record<string, string>

type Props = Omit<ImageProps, 'placeholder' | 'blurDataURL'> & {
  eager?: boolean
}

export function SmartImage({ src, alt, priority, eager, sizes, quality = 72, ...rest }: Props) {
  const path = typeof src === 'string' ? src : undefined
  const blurDataURL = path ? blurMap[path] : undefined

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      priority={Boolean(priority)}
      {...(!priority ? { loading: 'eager' as const } : {})}
      sizes={sizes ?? '100vw'}
      quality={quality}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
    />
  )
}
