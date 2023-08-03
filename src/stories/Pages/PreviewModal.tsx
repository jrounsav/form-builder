import "./previewModal.css"
import { Dropdown } from "../Atoms/Dropdown"
import { Form as FormTS } from "../../types"
import { Form } from "../Organisms/Form"

interface AdapterInfo {
  name: string
  id: string
}

interface ExportModalProps {
  form: FormTS
  adapters: AdapterInfo[]
  onSelectAdapter: (type: string) => void
}

export const PreviewModal = ({
  form,
  adapters = [],
  onSelectAdapter,
}: ExportModalProps) => {
  return (
    <div className="builder-preview-modal">
      <div>Form Preview </div>
      <div>
        Adapter Type: <Dropdown options={adapters} onSelect={onSelectAdapter} />
      </div>
      <Form form={form} />
    </div>
  )
}
