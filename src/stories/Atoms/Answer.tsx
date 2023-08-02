import "./answer.css"
import { QuestionType } from "../../types"

interface AnswerProps {
  questionType: QuestionType
  text?: string
  checked?: boolean
  maxLength?: number
  onChange?: (t: any) => void
  onKeyDown?: (t: any) => void
}

export const Answer = ({
  questionType,
  text,
  maxLength = 100,
  checked = false,
  onChange,
  onKeyDown,
}: AnswerProps) => {
  switch (questionType) {
    case QuestionType.Multi:
    case QuestionType.Single:
      return (
        <div className="builder-answer">
          <label>
            <input
              type={questionType == QuestionType.Multi ? "checkbox" : "radio"}
              checked={checked}
              onChange={onChange}
            />
            {text}
          </label>
        </div>
      )
    case QuestionType.Text:
      return (
        <div className="builder-answer">
          <textarea
            rows={5}
            cols={50}
            maxLength={maxLength}
            value={text}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
      )
    default:
      return null
  }
}
