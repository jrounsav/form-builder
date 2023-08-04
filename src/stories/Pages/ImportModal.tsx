import { useState } from "react"
import "./importModal.css"
import { Button } from "../Atoms/Button"
import { TextArea } from "../Atoms/TextArea"
import { Input } from "../Atoms/Input"
import { ExportType, Form } from "../../types"

interface ImportModalProps {
  onImport: (form: Form) => void
}

export const ImportModal = ({ onImport }: ImportModalProps) => {
  const [config, setConfig] = useState("")

  const handleSubmit = () => {
    try {
      const importConfig = JSON.parse(config)

      if (importConfig.type === ExportType.Builder) {
        const conf = JSON.parse(importConfig.config)
        if (conf) {
          onImport(conf)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleConfigChange = (value: string) => {
    setConfig(value)
  }

  return (
    <div className="builder-import-modal">
      <div className="import-modal-config-input">
        <label>JSON Input</label>
        <TextArea textAreaProps={{ rows: 10 }} onChange={handleConfigChange} />
      </div>
      <div>
        <Button onClick={handleSubmit} primary label="Import" />
      </div>
    </div>
  )
}
