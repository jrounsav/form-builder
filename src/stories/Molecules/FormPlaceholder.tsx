import "./formPlaceholder.css"
import { Placeholder } from "../Atoms/Placeholder"

interface FormPlaceholderProps {
  isHidden?: boolean
  isInverted?: boolean
  onClick?: () => void
}

export const FormPlaceholder = ({
  isHidden = false,
  isInverted = false,
  onClick,
}: FormPlaceholderProps) => {
  const overrideStyle = isHidden ? { style: { cursor: "auto" } } : {}

  const arrow = isInverted ? <span>&lt;</span> : <span>&gt;</span>

  const arrowCheckVis = isHidden ? null : arrow

  return (
    <span
      className="form-placeholder"
      onClick={!isHidden ? onClick : undefined}
      {...overrideStyle}
    >
      <div className="form-placeholder-text">{arrowCheckVis}</div>
      <Placeholder
        height="100%"
        invertGradient={isInverted}
        isHidden={isHidden}
      />
    </span>
  )
}
