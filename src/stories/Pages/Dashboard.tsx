import "./dashboard.css"
import { Form as FormTS } from "../../types"
import { Tabs } from "../Molecules/Tabs"
import { Form } from "../Organisms/Form"
import { FormPlaceholder } from "../Molecules/FormPlaceholder"

interface DashboardProps {
  forms: FormTS[]
  activeFormIndex: number
  nextForm: () => void
  lastForm: () => void
  addForm?: () => void
  importForm?: () => void
  exportForm?: () => void
  previewForm?: () => void
}

export const Dashboard = ({
  forms,
  activeFormIndex,
  nextForm,
  lastForm,
  addForm,
  importForm,
  exportForm,
  previewForm,
}: DashboardProps) => {
  const left = (
    <FormPlaceholder
      isInverted
      isHidden={activeFormIndex > 0 ? false : true}
      onClick={lastForm}
    />
  )
  const right = (
    <FormPlaceholder
      isHidden={activeFormIndex === forms.length - 1}
      onClick={nextForm}
    />
  )

  return (
    <div className="dashboard-container">
      <div className="dashboard-tabs">
        <Tabs
          addForm={addForm}
          importForm={importForm}
          exportForm={exportForm}
          previewForm={previewForm}
        />
      </div>
      <div className="builder-dashboard">
        {forms.length ? (
          <div className="dashboard-form-row">
            {left}
            <Form form={forms[activeFormIndex]} />
            {right}
          </div>
        ) : (
          <div style={{ alignSelf: "center" }}>Add or Import some forms.</div>
        )}
      </div>
    </div>
  )
}
