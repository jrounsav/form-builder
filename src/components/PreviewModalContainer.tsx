import { useState } from "react"
import { formToExportConfig } from "../app/adapters"
import { ExportType, Form } from "../types"
import { adapters } from "../app/adapters"
import { ExportModal } from "../stories/Pages/ExportModal"
import { PreviewModal } from "../stories/Pages/PreviewModal"

interface ExportModalContainerProps {
  form: Form
}

export const PreviewModalContainer = ({ form }: ExportModalContainerProps) => {
  const [adapter, setAdapter] = useState(adapters[0].id)
  const formExport = formToExportConfig(adapter, form)

  const handleSelect = (id: string) => {
    setAdapter(id as ExportType)
  }

  return (
    <PreviewModal
      adapters={adapters}
      formExport={formExport}
      onSelectAdapter={handleSelect}
    />
  )
}
