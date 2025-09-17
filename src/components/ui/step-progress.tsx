import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface Step {
  id: number
  title: string
  status: "completed" | "current" | "upcoming"
}

interface StepProgressProps {
  steps: Step[]
  className?: string
}

export function StepProgress({ steps, className }: StepProgressProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex items-start">
          {/* Vertical line connector */}
          {index < steps.length - 1 && (
            <div className="absolute left-4 top-8 h-16 w-px border-l-2 border-dashed border-muted-foreground/30" />
          )}

          {/* Step indicator */}
          <div className="flex items-center space-x-4 mb-8">
            <Badge
              variant={step.status === "completed" ? "default" : step.status === "current" ? "outline" : "outline"}
              className={cn(
                "h-8 w-8 rounded-full p-0 flex items-center justify-center text-sm font-medium",
                step.status === "completed" && "bg-blue-normal text-primary-foreground",
                // step.status === "current" && "bg-secondary text-secondary-foreground border-2 border-primary",
                step.status === "upcoming" && "bg-background text-muted-foreground border-2 border-muted-foreground/30",
              )}
            >
              {step.status === "completed" ? "✓" : step.id}
            </Badge>

            {/* Step content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-normal">Step {step.id}</span>
              </div>
              <h3 className={cn("text-base font-semibold", step.status === "upcoming" && "text-muted-foreground")}>
                {step.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
