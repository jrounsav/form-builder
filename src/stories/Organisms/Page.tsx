import "./page.css"
import { EntityType, Page as PageTS } from "../../types"
import { QuestionGroup } from "./QuestionGroup"
import { RemoveButton } from "../Atoms/RemoveButton"
import { AddButton } from "../Molecules/AddButton"

interface PageProps {
  page: PageTS
}

export const Page = ({ page }: PageProps) => {
  const children = page?.children || []
  const title = page?.title

  return (
    <div className="builder-page">
      <div className="edit-row">
        {title && <div className="page-title">{title}</div>}
        <RemoveButton target={page} />
      </div>
      {children.map((group) => (
        <div key={group.id} className="page-row">
          <QuestionGroup questionGroup={group} />
        </div>
      ))}
      <div className="edit-footer">
        <AddButton parentId={page.id} type={EntityType.Group} />
      </div>
    </div>
  )
}
