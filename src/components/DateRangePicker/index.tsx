import { DateTime, Interval } from 'luxon'
import { calc2Months } from '@/helpers/date/monthWeek'
import {
  last12Months,
  last14Days,
  last30Days,
  last3Months,
  last7Days,
  month2date,
  quarter2date
} from '@/helpers/date/ranges'
import MonthCalendar from './MonthCalendar'
import { useState } from 'react'

type TRanges = {
  [key: string]: { label: string; rangeFn?: (curr: DateTime) => Interval }
}
const ranges: TRanges = {
  lst7d: { label: 'Last 7 days', rangeFn: last7Days },
  lst14d: { label: 'Last 14 days', rangeFn: last14Days },
  lst30d: { label: 'Last 30 days', rangeFn: last30Days },
  lst3m: { label: 'Last 3 months', rangeFn: last3Months },
  lst12m: { label: 'Last 12 months', rangeFn: last12Months },
  m2d: { label: 'Month to date', rangeFn: month2date },
  q2d: { label: 'Quarter to date', rangeFn: quarter2date },
  all: { label: 'All times', rangeFn: undefined },
  ctm: { label: 'Custom', rangeFn: undefined }
}

const DateRangePicker = ({ now = DateTime.local() }) => {
  const [items, setItems] = useState<{
    range: Interval
    key: string
    firstMonth: DateTime
    secondMonth: DateTime
  }>({
    range: last12Months(now),
    key: 'lst12m',
    ...calc2Months(now, last12Months(now))
  })

  const handleRange = (key: string) => {
    if (ranges[key].rangeFn) {
      const newRange = ranges[key].rangeFn?.(now)
      if (!newRange) return
      setItems({ range: newRange, key, ...calc2Months(now, newRange) })
    }
  }

  const handleNext1st = () => {
    const firstMonth = items.firstMonth.plus({ month: 1 })
    if (!firstMonth.hasSame(items.secondMonth, 'month')) setItems({ ...items, firstMonth })
  }

  const handlePrev1st = () => {
    const firstMonth = items.firstMonth.minus({ month: 1 })
    setItems({ ...items, firstMonth })
  }

  const handleNext2nd = () => {
    const secondMonth = items.secondMonth.plus({ month: 1 })
    setItems({ ...items, secondMonth })
  }

  const handlePrev2nd = () => {
    const secondMonth = items.secondMonth.minus({ month: 1 })
    if (!secondMonth.hasSame(items.firstMonth, 'month')) setItems({ ...items, secondMonth })
  }

  return (
    <div className="flex h-max w-max">
      <aside className="rounded-l-lg border-r-2 border-secondary bg-background py-5">
        <ul>
          {Object.keys(ranges).map(key => (
            <li key={key}>
              <button
                className={`w-full px-8 py-2 text-left text-sm font-medium text-white hover:bg-secondary ${
                  key === items.key ? 'bg-secondary' : ''
                }`}
                onClick={() => {
                  handleRange(key)
                }}
              >
                {ranges[key].label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-642 flex-row">
        <section className="flex">
          <div className="w-320 h-320 border-r-2 border-secondary bg-background p-5">
            <MonthCalendar
              date={items.firstMonth}
              currDay={now}
              range={items.range}
              handleNext={handleNext1st}
              handlePrev={handlePrev1st}
            />
          </div>
          <div className="w-320 h-320 rounded-tr-lg bg-background p-5">
            <MonthCalendar
              date={items.secondMonth}
              currDay={now}
              range={items.range}
              handleNext={handleNext2nd}
              handlePrev={handlePrev2nd}
            />
          </div>
        </section>
        <section className="flex justify-between rounded-br-lg border-t-2 border-secondary bg-background p-5">
          <div className="flex gap-3" role="group">
            <output className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white">
              {items.range.start?.toFormat('dd/MM/yyyy') || ''}
            </output>
            <b className="self-center text-gray-400">{'->'}</b>
            <output className="rounded-lg border border-primary bg-transparent px-4 py-2 text-sm font-medium text-white">
              {items.range.end?.toFormat('dd/MM/yyyy') || ''}
            </output>
          </div>
          <div className="flex gap-3" role="group">
            <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white">
              Cancel
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
              Set Date
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DateRangePicker
