interface Step { number: number; label: string; desc?: string }

interface StepProcessProps { steps: Step[] }

export default function StepProcess({ steps }: StepProcessProps) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-start gap-2">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red text-white font-head font-800 text-lg flex items-center justify-center mb-2">
              {step.number}
            </div>
            <span className="text-xs font-head font-700 text-dark max-w-[110px] leading-tight">{step.label}</span>
            {step.desc && (
              <p className="text-xs text-gray-dark mt-1 max-w-[110px] leading-snug">{step.desc}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <span className="text-red font-head font-700 text-xl mt-3 hidden sm:block">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
