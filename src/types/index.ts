import { DayNumbers } from 'luxon'

export interface CellProp {
  day?: DayNumbers
  type: 'left' | 'right' | 'full' | 'between' | 'normal' | 'empty'
  isToday: boolean
}
