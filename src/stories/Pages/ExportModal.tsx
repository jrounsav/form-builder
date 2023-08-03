import "./exportModal.css"
import { TextArea } from "../Atoms/TextArea"
import { Dropdown } from "../Atoms/Dropdown"
import { FormExport } from "../../types"

interface AdapterInfo {
  name: string
  id: string
}

interface ExportModalProps {
  formExport: FormExport
  formTitle: string
  adapters: AdapterInfo[]
  onSelectAdapter: (type: string) => void
}

export const ExportModal = ({
  formExport,
  formTitle = "",
  adapters = [],
  onSelectAdapter,
}: ExportModalProps) => {
  const exportValue = JSON.stringify(formExport)
  return (
    <div className="builder-export-modal">
      <div>
        JSON Config for{" "}
        <span className="export-modal-form-title">{formTitle}</span>
      </div>
      <div>
        Adapter Type: <Dropdown options={adapters} onSelect={onSelectAdapter} />
      </div>
      <div className="export-modal-config-output">
        <TextArea textAreaProps={{ rows: 10, value: exportValue }} />
      </div>
    </div>
  )
}
