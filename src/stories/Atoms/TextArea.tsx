import { ChangeEvent, useState } from "react"

interface TextAreaProps {
  textAreaProps?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
  onChange?: (text: string) => void
}

export const TextArea = ({ textAreaProps = {}, onChange }: TextAreaProps) => {
  const [text, setText] = useState<string>("")

  const setAndCallback = (value: string) => {
    setText(value)
    onChange && onChange(value)
  }

  const handleTextUpdate = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAndCallback(event.target.value)
  }

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault()
      setAndCallback(text + "\n")
    }
  }

  return (
    <textarea
      value={text}
      onChange={handleTextUpdate}
      onKeyDown={handleKeyDown}
      {...textAreaProps}
    />
  )
}
