import { useContext } from "react"
import { ControllerContext } from "../ControllerContext"

const useController = () => {
  const {
    isEditMode,
    addEntity,
    removeEntity,
    updateEntity,
    updateQuestionType,
    nextPage,
    prevPage,
    selectPage,
    activePage,
  } = useContext(ControllerContext)

  return {
    activePage,
    addEntity,
    isEditMode,
    removeEntity,
    updateEntity,
    nextPage,
    prevPage,
    selectPage,
    updateQuestionType,
  }
}

export default useController
