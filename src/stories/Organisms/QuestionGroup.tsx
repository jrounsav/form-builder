import "./questionGroup.css"
import { EntityType, Group } from "../../types"
import { Question } from "../Molecules/Question"
import { RemoveButton } from "../Atoms/RemoveButton"
import { AddButton } from "../Molecules/AddButton"
import { InlineEditableText } from "../Atoms/InlineEditableText"

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
      <div className="edit-row">
        <span className="group-title-descriptor">Group:</span>
        <InlineEditableText targetId={questionGroup.id} text={title} />
        <RemoveButton target={questionGroup} />
      </div>
      {children.map((question) => (
        <div key={question.id} className="group-row">
          <Question question={question} onChange={onChange} />
        </div>
      ))}
      <div className="edit-footer">
        <AddButton parentId={questionGroup.id} type={EntityType.Question} />
      </div>
    </div>
  )
}
