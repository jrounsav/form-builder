import "./tabs.css"
import { Button } from "../Atoms/Button"

interface ButtonProps {
  active?: number
  addForm?: () => void
  importForm?: () => void
  exportForm?: () => void
  previewForm?: () => void
}

export const Tabs = ({
  addForm,
  importForm,
  exportForm,
  previewForm,
}: ButtonProps) => {
  return (
    <div className="builder-tabs">
      <Button
        label="Add form"
        selected={true}
        onClick={() => (addForm ? addForm() : null)}
      />
      <Button label="Import" onClick={importForm} />
      <Button label="Export" onClick={exportForm} />
      <Button label="Preview" onClick={previewForm} />
    </div>
  )
}
