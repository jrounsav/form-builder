import "./addButton.css"
import useController from "../../hooks/useController"
import { EntityType, FormEntity } from "../../types"
import { Button } from "../Atoms/Button"

interface AddButtonProps {
  parentId: string
  type: EntityType
  onClick?: (target: FormEntity) => void
}

export const AddButton = ({ parentId, type }: AddButtonProps) => {
  const { isEditMode, addEntity } = useController()

  if (!isEditMode || !parentId) {
    return null
  }

  return (
    <div className="edit-mode-add-button">
      <Button
        primary
        onClick={() => addEntity(parentId, type)}
        label={`Add ${type}`}
      />
    </div>
  )
}
