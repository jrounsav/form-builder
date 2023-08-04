import { ChangeEvent, useEffect, useState } from "react"
import { QuestionType } from "../../types"

interface DropdownOption {
  name: string
  id: string | QuestionType
}

interface DropdownProps {
  fillerText?: string
  options: DropdownOption[]
  startingId?: string
  onSelect: (id: QuestionType) => void
}

export const Dropdown = ({
  fillerText,
  options,
  startingId,
  onSelect,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    if (startingId) {
      const option = options.find((opt) => opt.id === startingId)
      option && setSelectedOption(option.id)
    }
  }, [])

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as QuestionType
    setSelectedOption(selectedValue)
    onSelect(selectedValue)
  }

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      {fillerText ? <option value="">{fillerText}</option> : null}
      {options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
