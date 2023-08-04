import { ChangeEvent, useEffect, useState } from "react"

interface DropdownOption {
  name: string
  id: string
}

interface DropdownProps {
  fillerText?: string
  options: DropdownOption[]
  selectedId?: string
  onSelect: (id: string) => void
}

export const Dropdown = ({
  fillerText,
  options,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    if (selectedId) {
      const option = options.find((opt) => opt.id === selectedId)
      option && setSelectedOption(option.id)
    }
  }, [])

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
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
