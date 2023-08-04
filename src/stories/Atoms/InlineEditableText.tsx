import { useEffect, useState } from "react"
import "./inlineEditableText.css"
import useController from "../../hooks/useController"

interface InlineEditProps {
  targetId: string
  text?: string
  onChange?: (text: string) => void
}

export const InlineEditableText = ({
  text = "",
  targetId,
  onChange,
}: InlineEditProps) => {
  const { isEditMode, updateEntity } = useController()
  const [isEditing, setIsEditing] = useState(false)
  const [internalText, setInternalText] = useState(text)

  const isEmpty = !internalText

  useEffect(() => {
    setInternalText(text)
  }, [text])

  const handleDoubleClick = () => {
    isEditMode && setIsEditing(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalText(event.target.value)
  }

  const handleInputBlur = () => {
    setIsEditing(false)
    targetId && updateEntity && updateEntity(targetId, internalText)
  }

  const renderText = () => {
    if (isEmpty) {
      return <span className="inline-editable-empty">null</span>
    }
    return <span>{internalText}</span>
  }

  return (
    <div className="inline-edit-text" onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={internalText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        renderText()
      )}
    </div>
  )
}
