import { CSSProperties } from "react"
import "./removeButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import useController from "../../hooks/useController"
import { FormEntity } from "../../types"

interface RemoveButtonProps {
  target: FormEntity
  style?: CSSProperties
  onClick?: (target: FormEntity) => void
}

export const RemoveButton = ({ style, target, onClick }: RemoveButtonProps) => {
  const { isEditMode, removeEntity } = useController()

  if (!isEditMode || !target) {
    return null
  }

  return (
    <div
      className="edit-mode-button"
      style={style}
      onClick={() => (onClick ? onClick(target) : removeEntity(target.id))}
    >
      <FontAwesomeIcon fontSize={10} icon={faMinus} />
    </div>
  )
}
