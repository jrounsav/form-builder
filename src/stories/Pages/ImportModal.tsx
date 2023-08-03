import { useState } from "react"
import "./importModal.css"
import { Button } from "../Atoms/Button"
import { TextArea } from "../Atoms/TextArea"
import { Input } from "../Atoms/Input"

interface ImportModalProps {
  onImport: (config: string, name: string) => void
}

export const ImportModal = ({ onImport }: ImportModalProps) => {
  const [config, setConfig] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = () => {
    onImport(config, name)
  }

  const handleConfigChange = (value: string) => {
    setConfig(value)
  }

  const handleNameChange = (value: string) => {
    setName(value)
  }

  return (
    <div className="builder-import-modal">
      <div className="import-modal-config-input">
        <label>JSON Input</label>
        <TextArea textAreaProps={{ rows: 10 }} onChange={handleConfigChange} />
      </div>
      <div className="import-modal-config-input">
        <label>Form name</label>
        <Input onChange={handleNameChange} />
      </div>
      <div>
        <Button onClick={handleSubmit} primary label="Import" />
      </div>
    </div>
  )
}
