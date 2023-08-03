import { useState } from "react"

import "./form.css"
import { EntityType, Form as FormTS } from "../../types"
import { Page } from "./Page"
import { PageSelect } from "../Atoms/PageSelect"
import { RemoveButton } from "../Atoms/RemoveButton"
import useController from "../../hooks/useController"
import { AddButton } from "../Molecules/AddButton"
import { Button } from "../Atoms/Button"

interface FormProps {
  form: FormTS
}

export const Form = ({ form }: FormProps) => {
  const { activePage, prevPage, nextPage, selectPage } = useController()

  const title = form?.title
  const children = form?.children || []
  const page = children?.[activePage]
  const isSelectorVisible = !!children.length
  console.log(page)
  return (
    <div className="builder-form">
      <div className="edit-row">
        {title && <div className="form-title">{title}</div>}
        <RemoveButton target={form} />
      </div>
      <div className="form-container">
        {page && (
          <div className="form-page-container">
            <Page page={page} />
          </div>
        )}
        {isSelectorVisible && (
          <PageSelect
            count={children.length}
            target={activePage}
            handleBack={prevPage}
            handleForward={nextPage}
            handleSelect={selectPage}
          />
        )}
        <div className="edit-footer">
          <AddButton parentId={form.id} type={EntityType.Page} />
        </div>
      </div>
    </div>
  )
}
