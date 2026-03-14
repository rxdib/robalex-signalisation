import Link from 'next/link'

type SmartLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

const externalHrefPattern = /^(https?:|mailto:|tel:)/

export default function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (externalHrefPattern.test(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
