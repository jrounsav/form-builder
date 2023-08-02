import { useState } from "react"

import "./form.css"
import { Form as FormTS } from "../../types"
import { Page } from "./Page"
import { PageSelect } from "../Atoms/PageSelect"

interface FormProps {
  form: FormTS
}

export const Form = ({ form }: FormProps) => {
  const [activePage, setActivePage] = useState(0)

  const title = form?.title
  const children = form?.children || []
  const page = children?.[activePage]
  const isSelectorVisible = children.length

  const handleBack = () => {
    if (activePage > 0) {
      setActivePage((curr) => curr - 1)
    }
  }

  const handleForward = () => {
    if (activePage < children.length - 1) {
      setActivePage((curr) => curr + 1)
    }
  }

  const handleSelect = (target: number) => {
    setActivePage(target - 1)
  }

  return (
    <div className="builder-form">
      {title && <div className="form-title">{title}</div>}
      <div className="form-container">
        {page && (
          <div className="form-page-container">
            <Page page={page} />
          </div>
        )}
        {isSelectorVisible && (
          <PageSelect
            count={children.length}
            handleBack={handleBack}
            handleForward={handleForward}
            handleSelect={handleSelect}
          />
        )}
      </div>
    </div>
  )
}
