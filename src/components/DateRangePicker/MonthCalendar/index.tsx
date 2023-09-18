import { DateTime, Interval } from 'luxon'
import Body from './Body'
import Header from './Header'

interface Props {
  date?: DateTime
  currDay?: DateTime
  range?: Interval
  handleNext?: () => void
  handlePrev?: () => void
}

const MonthCalendar = ({
  date = DateTime.local(),
  currDay = DateTime.local(),
  handleNext = () => {},
  handlePrev = () => {},
  range
}: Props) => (
  <>
    <Header date={date} handleNext={handleNext} handlePrev={handlePrev} />
    <Body date={date} currDay={currDay} range={range} />
  </>
)
export default MonthCalendar
