import { cn } from '../../lib/cn'
import { SmartImage } from './smart-image'

type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  imgClassName?: string
  imageClassName?: string
  sizes?: string
  priority?: boolean
  eager?: boolean
}

export function PhotoFigure({ src, alt, caption, className, imgClassName, imageClassName, sizes, priority, eager }: Props) {
  return (
    <figure className={cn('min-w-0', className)}>
      <div className={cn('relative w-full overflow-hidden bg-zinc-200', imgClassName)}>
        <SmartImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          eager={eager}
          sizes={sizes ?? '100vw'}
          className={cn('object-cover', imageClassName)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[0.8rem] tracking-wide text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
