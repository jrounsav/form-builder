import "./questionGroup.css"
import { Group } from "../../types"
import { Question } from "../Molecules/Question"

interface QuestionGroupProps {
  questionGroup: Group
}

export const QuestionGroup = ({ questionGroup }: QuestionGroupProps) => {
  const children = questionGroup?.children || []
  const title = questionGroup?.title

  const onChange = () => {
    // noop
    // temp until we need to track
  }

  return (
    <div className="builder-question-group">
      {title && <div className="question-group-title">{title}</div>}
      {children.map((question) => (
        <div className="group-row">
          <Question question={question} onChange={onChange} />
        </div>
      ))}
    </div>
  )
}
