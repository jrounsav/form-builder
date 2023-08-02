import { ChangeEvent, useState } from "react"

import "./question.css"
import { QuestionType, Question as QuestionTS } from "../../types"
import { Answer } from "../Atoms/Answer"

interface QuestionProps {
  question: QuestionTS
  onChange: () => void
}

export const Question = ({ question, onChange }: QuestionProps) => {
  const [selected, setSelected] = useState<number[]>([])
  const [userText, setUserText] = useState<string>("")
  console.log(question)
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

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault()
      setUserText((prevText) => prevText + "\n")
    }
  }

  return (
    <div className="builder-question">
      <div className="builder-question-text">{text}</div>
      {isMulti || isRadio
        ? children.map((answer, index) => (
            <Answer
              checked={selected.includes(index)}
              key={`${id}-${index}`}
              text={answer.text}
              questionType={questionType}
              onChange={() => handleSelected(index)}
            />
          ))
        : null}
      {isTextInput ? (
        <Answer
          questionType={questionType}
          text={userText}
          onChange={handleTextUpdate}
          onKeyDown={handleKeyDown}
        />
      ) : null}
    </div>
  )
}
