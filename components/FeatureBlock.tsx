import Image from 'next/image'

interface FeatureBlockProps {
  image: { src: string; alt: string }
  imageBadge?: string
  children: React.ReactNode   // text content (heading, paragraphs, list, CTA)
  reverse?: boolean
  dark?: boolean
  imageClassName?: string
  imageWrapperClassName?: string
}

export default function FeatureBlock({
  image,
  imageBadge,
  children,
  reverse,
  dark,
  imageClassName,
  imageWrapperClassName,
}: FeatureBlockProps) {
  return (
    <div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-14 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className={`relative overflow-hidden rounded-xl bg-bg-light shadow-card-lg ${imageWrapperClassName ?? ''}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={420}
          className={`aspect-[10/7] w-full object-cover ${imageClassName ?? ''}`}
        />
        {imageBadge && (
          <div className="absolute bottom-4 left-4 bg-red text-white text-xs font-head font-700 uppercase tracking-wide px-3 py-1.5 rounded">
            {imageBadge}
          </div>
        )}
      </div>
      <div className={dark ? 'text-white' : 'text-dark'}>{children}</div>
    </div>
  )
}
