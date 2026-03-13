interface Step { number: number; label: string; desc?: string }

interface StepProcessProps { steps: Step[] }

export default function StepProcess({ steps }: StepProcessProps) {
  return (
    <div className="grid gap-4 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-2">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-start gap-3 rounded-xl border border-gray-light bg-white p-4 text-left sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
          <div className="flex flex-row items-start gap-3 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red text-lg font-head font-800 text-white sm:mb-2">
              {step.number}
            </div>
            <div>
              <span className="block max-w-[180px] text-sm font-head font-700 leading-tight text-dark sm:max-w-[110px] sm:text-xs">
                {step.label}
              </span>
              {step.desc && (
                <p className="mt-1 max-w-[180px] text-xs leading-snug text-gray-dark sm:max-w-[110px]">
                  {step.desc}
                </p>
              )}
            </div>
          </div>
          {i < steps.length - 1 && (
            <span className="mt-3 hidden text-xl font-head font-700 text-red sm:block">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
