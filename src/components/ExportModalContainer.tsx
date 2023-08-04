import { useState } from "react"
import { formToExportConfig } from "../app/adapters"
import { ExportType, Form } from "../types"
import { adapters } from "../app/adapters"
import { ExportModal } from "../stories/Pages/ExportModal"

interface ExportModalContainerProps {
  form: Form
}

export const ExportModalContainer = ({ form }: ExportModalContainerProps) => {
  const [adapter, setAdapter] = useState(adapters[0].id)
  const config = formToExportConfig(adapter, form)

  const handleSelect = (id: string) => {
    setAdapter(id as ExportType)
  }

  return (
    <ExportModal
      formExport={config}
      formTitle={config.title}
      adapters={adapters}
      adapterId={adapter}
      onSelectAdapter={handleSelect}
    />
  )
}
