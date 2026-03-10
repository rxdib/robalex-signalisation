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
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
      <Image src={src} alt={alt} width={width} height={height} className="object-contain max-h-14" />
    </a>
  )
}
