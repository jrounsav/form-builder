import "./answer.css"
import { Answer as AnswerTS, QuestionType } from "../../types"
import { TextArea } from "../Atoms/TextArea"
import { Input } from "../Atoms/Input"
import { RemoveButton } from "../Atoms/RemoveButton"
import { InlineEditableText } from "../Atoms/InlineEditableText"

interface AnswerProps {
  answer: AnswerTS
  questionType: QuestionType
  text?: string
  checked?: boolean
  maxLength?: number
  onChange?: (t: any) => void
}

export const Answer = ({
  questionType,
  text,
  maxLength = 100,
  checked = false,
  answer,
  onChange,
}: AnswerProps) => {
  switch (questionType) {
    case QuestionType.Multi:
    case QuestionType.Single:
      const type = questionType === QuestionType.Multi ? "checkbox" : "radio"

      return (
        <div className="edit-row">
          <div className="builder-answer">
            <Input inputProps={{ type, checked }} onChange={onChange} />
            <InlineEditableText targetId={answer.id} text={answer.text} />
          </div>
          {answer && <RemoveButton target={answer} />}
        </div>
      )
    case QuestionType.Text:
      return (
        <div className="builder-answer">
          <TextArea
            textAreaProps={{
              rows: 5,
              cols: 50,
              maxLength,
            }}
          />
        </div>
      )
    default:
      return null
  }
}
