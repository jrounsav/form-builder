import { ChangeEvent, useState } from "react"

interface InputProps {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  onChange?: (text: string) => void
}

export const Input = ({ inputProps = {}, onChange }: InputProps) => {
  const [text, setText] = useState<string>("")

  const setAndCallback = (value: string) => {
    setText(value)
    onChange && onChange(value)
  }

  const handleTextUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setAndCallback(event.target.value)
  }

  return <input value={text} onChange={handleTextUpdate} {...inputProps} />
}
