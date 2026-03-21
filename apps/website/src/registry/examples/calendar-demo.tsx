import { Calendar } from '@gedatou/ui'
import * as React from 'react'

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex items-center justify-center">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  )
}
