import "./exportModal.css"
import { TextArea } from "../Atoms/TextArea"
import { Dropdown } from "../Atoms/Dropdown"
import { Adapter, FormExport } from "../../types"

interface ExportModalProps {
  formExport: FormExport
  formTitle: string
  adapters: Adapter[]
  adapterId: string
  onSelectAdapter: (type: string) => void
}

export const ExportModal = ({
  formExport,
  formTitle = "",
  adapters = [],
  adapterId,
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
        Adapter Type:{" "}
        <Dropdown
          options={adapters}
          onSelect={onSelectAdapter}
          selectedId={adapterId}
        />
      </div>
      <div className="export-modal-config-output">
        <TextArea textAreaProps={{ rows: 10, value: exportValue }} />
      </div>
    </div>
  )
}
