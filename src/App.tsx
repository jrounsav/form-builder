import { useState } from "react"
import "./App.css"
import { Dashboard } from "./stories/Pages/Dashboard"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import {
  addForm,
  nextForm,
  prevForm,
  selectActiveFormIndex,
  selectForms,
  addEntity,
  removeEntity,
  nextPage,
  prevPage,
  selectPage,
  selectActivePageIndex,
  updateEntity,
  updateQuestionType,
} from "./features/form/formSlice"
import { ControllerContext } from "./ControllerContext"
import { EntityType, Form, QuestionType } from "./types"
import { Modal } from "./stories/Atoms/Modal"
import { ExportModal } from "./stories/Pages/ExportModal"
import { ImportModal } from "./stories/Pages/ImportModal"
import { PreviewModal } from "./stories/Pages/PreviewModal"
import { form1 } from "./example_data/base_config"
import { adapters, formToExportConfig } from "./app/adapters"
import { ExportModalContainer } from "./components/ExportModalContainer"
import { PreviewModalContainer } from "./components/PreviewModalContainer"

enum ModalType {
  Import = "import",
  Export = "export",
  Preview = "preview",
}

function App() {
  const dispatch = useAppDispatch()
  const forms = useAppSelector(selectForms)
  const activeFormIndex = useAppSelector(selectActiveFormIndex)
  const activePageIndex = useAppSelector(selectActivePageIndex)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modal, setModal] = useState<ModalType | null>(null)

  const form = forms[activeFormIndex]

  const handleLastForm = () => {
    dispatch(prevForm())
  }

  const handleNextForm = () => {
    dispatch(nextForm())
  }

  const handlePrevPage = () => {
    dispatch(prevPage())
  }

  const handleNextPage = () => {
    dispatch(nextPage())
  }

  const handleSelectPage = (ind: number) => {
    dispatch(selectPage(ind))
  }

  const handleAddForm = (form?: Form) => {
    dispatch(addForm(form))
  }

  const handleAddEntity = (parentId: string, entityType: EntityType) => {
    dispatch(addEntity({ parentId, entityType }))
  }

  const handleRemoveEntity = (id: string) => {
    dispatch(removeEntity(id))
  }

  const handleUpdateEntity = (id: string, text: string) => {
    dispatch(updateEntity({ targetId: id, text }))
  }

  const handleUpdateQuestionType = (id: string, questionType: QuestionType) => {
    dispatch(updateQuestionType({ targetId: id, questionType }))
  }

  const openImportModal = () => {
    setModal(ModalType.Import)
    setIsModalOpen(true)
  }

  const openExportModal = () => {
    if (form) {
      setModal(ModalType.Export)
      setIsModalOpen(true)
    } else {
      alert("Nothing to export")
    }
  }

  const openPreviewModal = () => {
    if (form) {
      setModal(ModalType.Preview)
      setIsModalOpen(true)
    } else {
      alert("Nothing to preview")
    }
  }

  const closeModal = () => {
    setModal(null)
    setIsModalOpen(false)
  }

  const selectModal = (str: ModalType | null) => {
    switch (str) {
      case ModalType.Import:
        return <ImportModal onImport={handleAddForm} />
      case ModalType.Export:
        return <ExportModalContainer form={form} />

      case ModalType.Preview:
        return <PreviewModalContainer form={form} />
      default:
        return null
    }
  }

  const modalContent = selectModal(modal)

  return (
    <div className="Approot">
      <ControllerContext.Provider
        value={{
          isPreview: false,
          previewForm: form1,
          isEditMode: true,
          activePage: activePageIndex,
          addEntity: handleAddEntity,
          removeEntity: handleRemoveEntity,
          nextPage: handleNextPage,
          prevPage: handlePrevPage,
          selectPage: handleSelectPage,
          updateEntity: handleUpdateEntity,
          updateQuestionType: handleUpdateQuestionType,
        }}
      >
        <Modal
          isOpen={isModalOpen}
          children={modalContent}
          close={closeModal}
        />
        <Dashboard
          forms={forms}
          activeFormIndex={activeFormIndex}
          lastForm={handleLastForm}
          nextForm={handleNextForm}
          addForm={handleAddForm}
          importForm={openImportModal}
          exportForm={openExportModal}
          previewForm={openPreviewModal}
        />
      </ControllerContext.Provider>
    </div>
  )
}

export default App
