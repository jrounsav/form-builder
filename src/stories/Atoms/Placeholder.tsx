import "./placeholder.css"

interface PlaceholderProps {
  height?: string
  width?: string
  invertGradient?: boolean
  isHidden?: boolean
}

export const Placeholder = ({
  height = "50vh",
  width = "150px",
  invertGradient = false,
  isHidden = false,
}: PlaceholderProps) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        ...(isHidden ? { background: "transparent" } : {}),
      }}
      className={`placeholder-container ${invertGradient ? "rotate-left" : ""}`}
    />
  )
}
