import { ChangeEvent, useState } from "react"

interface DropdownOption {
  name: string
  id: string
}

interface DropdownProps {
  fillerText?: string
  options: DropdownOption[]
  onSelect: (id: string) => void
}

export const Dropdown = ({ fillerText, options, onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("")

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
