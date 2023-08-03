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
} from "./features/form/formSlice"
import { ControllerContext } from "./ControllerContext"
import { EntityType } from "./types"

function App() {
  const dispatch = useAppDispatch()
  const forms = useAppSelector(selectForms)
  const activeFormIndex = useAppSelector(selectActiveFormIndex)
  const activePageIndex = useAppSelector(selectActivePageIndex)

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

  const handleAddForm = () => {
    dispatch(addForm())
  }

  const handleAddEntity = (parentId: string, entityType: EntityType) => {
    dispatch(addEntity({ parentId, entityType }))
  }

  const handleRemoveEntity = (id: string) => {
    dispatch(removeEntity(id))
  }

  return (
    <div className="App">
      <ControllerContext.Provider
        value={{
          isEditMode: true,
          activePage: activePageIndex,
          addEntity: handleAddEntity,
          removeEntity: handleRemoveEntity,
          nextPage: handleNextPage,
          prevPage: handlePrevPage,
          selectPage: handleSelectPage,
        }}
      >
        <Dashboard
          forms={forms}
          activeFormIndex={activeFormIndex}
          lastForm={handleLastForm}
          nextForm={handleNextForm}
          addForm={handleAddForm}
        />
      </ControllerContext.Provider>
    </div>
  )
}

export default App
