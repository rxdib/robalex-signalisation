interface ResponsiveSource {
  srcSet: string
  type: string
  media?: string
  sizes?: string
}

interface ResponsivePictureProps {
  src: string
  alt: string
  sources?: ResponsiveSource[]
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'sync' | 'auto'
  className?: string
  pictureClassName?: string
  style?: React.CSSProperties
}

export default function ResponsivePicture({
  src,
  alt,
  sources,
  srcSet,
  sizes,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  className,
  pictureClassName,
  style,
}: ResponsivePictureProps) {
  return (
    <picture className={pictureClassName}>
      {sources?.map((source) => (
        <source
          key={`${source.type}-${source.media ?? 'default'}-${source.srcSet}`}
          srcSet={source.srcSet}
          type={source.type}
          media={source.media}
          sizes={source.sizes ?? sizes}
        />
      ))}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        className={className}
        style={style}
      />
    </picture>
  )
}
