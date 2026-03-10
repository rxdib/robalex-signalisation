interface BadgeProps { children: React.ReactNode; white?: boolean }

export default function Badge({ children, white }: BadgeProps) {
  return (
    <span className={`inline-block text-xs font-head font-700 uppercase tracking-widest px-3 py-1 rounded mb-3 ${white ? 'bg-white text-navy' : 'bg-red text-white'}`}>
      {children}
    </span>
  )
}
