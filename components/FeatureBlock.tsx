import Image from 'next/image'

interface FeatureBlockProps {
  image: { src: string; alt: string }
  imageBadge?: string
  children: React.ReactNode   // text content (heading, paragraphs, list, CTA)
  reverse?: boolean
  dark?: boolean
}

export default function FeatureBlock({ image, imageBadge, children, reverse, dark }: FeatureBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={420}
          className="w-full h-auto rounded-xl object-cover shadow-card-lg"
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
