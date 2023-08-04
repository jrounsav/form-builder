import { ChangeEvent, useState } from "react"

import "./question.css"
import { QuestionType, Question as QuestionTS, EntityType } from "../../types"
import { Answer } from "./Answer"
import { RemoveButton } from "../Atoms/RemoveButton"
import { AddButton } from "./AddButton"
import { InlineEditableText } from "../Atoms/InlineEditableText"
import { QuestionTypeDropdown } from "./QuestionTypeDropdown"

interface QuestionProps {
  question: QuestionTS
  onChange: () => void
}

export const Question = ({ question, onChange }: QuestionProps) => {
  const [selected, setSelected] = useState<number[]>([])
  const [userText, setUserText] = useState<string>("")

  const { id, text, questionType, children = [] } = question

  const isMulti = questionType === QuestionType.Multi
  const isRadio = questionType === QuestionType.Single
  const isTextInput = questionType === QuestionType.Text

  const handleSelected = (target: number) => {
    if (isRadio) {
      setSelected([target])
    } else if (isMulti) {
      if (!selected.includes(target)) {
        setSelected([...selected, target])
      } else {
        setSelected(selected.filter((el) => el !== target))
      }
    } else if (isTextInput) {
      // do nothing
    }
  }

  const handleTextUpdate = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(event.target.value)
  }

  return (
    <div className="builder-question">
      <div className="edit-row">
        <span className="question-title-descriptor">Question:</span>
        <InlineEditableText targetId={question.id} text={text} />
        <RemoveButton target={question} />
      </div>
      <div style={{ marginBottom: "5px", marginTop: "5px" }}>
        <QuestionTypeDropdown question={question} />
      </div>
      {isMulti || isRadio
        ? children.map((answer, index) => (
            <div key={`${id}-${index}`} className="question-answer-row">
              <Answer
                answer={answer}
                checked={selected.includes(index)}
                text={answer.text}
                questionType={questionType}
                onChange={() => handleSelected(index)}
              />
            </div>
          ))
        : null}
      {isTextInput ? (
        <Answer
          answer={children?.[0]}
          questionType={questionType}
          text={userText}
          onChange={handleTextUpdate}
        />
      ) : null}
      <div className="edit-footer">
        <AddButton parentId={question.id} type={EntityType.Answer} />
      </div>
    </div>
  )
}
