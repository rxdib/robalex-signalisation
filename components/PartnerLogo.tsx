import Image from 'next/image'

interface PartnerLogoProps {
  src: string
  alt: string
  href: string
  width?: number
  height?: number
}

export default function PartnerLogo({ src, alt, href, width = 140, height = 60 }: PartnerLogoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
    >
      <Image src={src} alt={alt} width={width} height={height} sizes={`${width}px`} className="object-contain max-h-14" />
    </a>
  )
}
