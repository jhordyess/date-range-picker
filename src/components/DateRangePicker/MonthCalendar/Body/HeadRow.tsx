const week = [
  { label: 'Mo', key: 'mo' },
  { label: 'Tu', key: 'tu' },
  { label: 'We', key: 'we' },
  { label: 'Th', key: 'th' },
  { label: 'Fr', key: 'fr' },
  { label: 'Sa', key: 'sa' },
  { label: 'Su', key: 'su' }
]

const HeadRow = () => (
  <tr>
    {week.map(({ label, key }) => (
      <th key={key}>
        <div className="flex w-full justify-center">
          <p className="text-center text-sm font-bold text-gray-100">{label}</p>
        </div>
      </th>
    ))}
  </tr>
)

export default HeadRow
