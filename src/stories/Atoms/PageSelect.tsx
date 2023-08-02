import "./pageSelect.css"

interface PageSelectProps {
  count: number
  target: number
  handleBack: () => void
  handleForward: () => void
  handleSelect: (int: number) => void
}

export const PageSelect = ({
  count,
  target,
  handleBack,
  handleForward,
  handleSelect,
}: PageSelectProps) => {
  const numbersArray = Array.from({ length: count }, (_, index) => index + 1)

  if (!count) return null

  return (
    <div className="page-select">
      <span className="page-select-option" onClick={handleBack}>
        &lt;
      </span>
      {numbersArray.map((number) => {
        const distance = Math.abs(target - number)
        const isStart = number === 1
        const isEnd = number === numbersArray.length

        if (distance > 6 && !isEnd && !isStart) return null

        if (distance > 3 && !isEnd && !isStart) {
          return <span className="page-select-option">.</span>
        }

        return (
          <span
            onClick={() => handleSelect(number)}
            className="page-select-option"
          >
            {number}
          </span>
        )
      })}
      <span className="page-select-option" onClick={handleForward}>
        &gt;
      </span>
    </div>
  )
}
