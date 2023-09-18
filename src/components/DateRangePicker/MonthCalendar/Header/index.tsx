import { DateTime } from 'luxon'
import { LeftBtn, RightBtn } from './Buttons'

interface Props {
  date: DateTime
  handlePrev: () => void
  handleNext: () => void
}

const Header = ({ date, handlePrev, handleNext }: Props) => (
  <div className="flex items-center justify-between">
    <LeftBtn onClick={handlePrev} />
    <span tabIndex={0} className="text-base font-bold text-gray-100 focus:outline-none">
      {date.toFormat('MMMM yyyy')}
    </span>
    <RightBtn onClick={handleNext} />
  </div>
)

export default Header
