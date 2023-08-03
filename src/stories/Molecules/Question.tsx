import { ChangeEvent, useState } from "react"

import "./question.css"
import { QuestionType, Question as QuestionTS, EntityType } from "../../types"
import { Answer } from "./Answer"
import { RemoveButton } from "../Atoms/RemoveButton"
import { AddButton } from "./AddButton"

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
        <div className="builder-question-text">{text}</div>
        <RemoveButton target={question} />
      </div>
      {isMulti || isRadio
        ? children.map((answer, index) => (
            <div className="question-answer-row">
              <Answer
                answer={answer}
                checked={selected.includes(index)}
                key={`${id}-${index}`}
                text={answer.text}
                questionType={questionType}
                onChange={() => handleSelected(index)}
              />
            </div>
          ))
        : null}
      {isTextInput ? (
        <Answer
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
