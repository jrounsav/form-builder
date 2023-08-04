import "./questionTypeDropdown.css"
import useController from "../../hooks/useController"
import { Question, QuestionType } from "../../types"
import { Dropdown } from "../Atoms/Dropdown"

interface QuestionTypeDropdownProps {
  question: Question
}

export const QuestionTypeDropdown = ({
  question,
}: QuestionTypeDropdownProps) => {
  const { isEditMode, updateQuestionType } = useController()

  const options = [
    { name: "Multiselect", id: QuestionType.Multi },
    { name: "Single-select", id: QuestionType.Single },
    { name: "Text input", id: QuestionType.Text },
  ]

  const handleSelect = (val: string) => {
    updateQuestionType(question.id, val as QuestionType)
  }

  if (!isEditMode) {
    return null
  }

  return (
    <div className="question-type-dropdown">
      <span className="question-type-label">Question type:</span>
      <Dropdown
        options={options}
        onSelect={handleSelect}
        selectedId={question.questionType}
      />
    </div>
  )
}
