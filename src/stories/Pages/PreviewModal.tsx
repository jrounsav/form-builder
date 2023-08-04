import "./previewModal.css"
import { Dropdown } from "../Atoms/Dropdown"
import { Adapter, ExportType, Form as FormTS, FormExport } from "../../types"
import { Form } from "../Organisms/Form"
import { ControllerContext } from "../../ControllerContext"

interface ExportModalProps {
  formExport: FormExport
  adapters: Adapter[]
  onSelectAdapter: (type: string) => void
}

export const PreviewModal = ({
  formExport,
  adapters = [],
  onSelectAdapter,
}: ExportModalProps) => {
  const renderForm = () => {
    switch (formExport?.type) {
      case ExportType.Builder:
        const form = JSON.parse(formExport.config) as FormTS
        return (
          <ControllerContext.Provider
            // @ts-ignore
            value={{
              isPreview: true,
              previewForm: form,
            }}
          >
            <Form form={form} />
          </ControllerContext.Provider>
        )
      case ExportType.JSONForms:
      default:
        return null
    }
  }

  return (
    <div className="builder-preview-modal">
      <div>Form Preview </div>
      <div>
        Adapter Type: <Dropdown options={adapters} onSelect={onSelectAdapter} />
      </div>
      {renderForm()}
    </div>
  )
}
