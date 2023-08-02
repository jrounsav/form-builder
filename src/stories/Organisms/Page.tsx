import "./page.css"
import { Page as PageTS } from "../../types"
import { QuestionGroup } from "./QuestionGroup"

interface PageProps {
  page: PageTS
}

export const Page = ({ page }: PageProps) => {
  const children = page?.children || []
  const title = page?.title

  return (
    <div className="builder-page">
      {title && <div className="page-title">{title}</div>}
      {children.map((group) => (
        <div className="page-row">
          <QuestionGroup questionGroup={group} />
        </div>
      ))}
    </div>
  )
}
