import type { ReactElement } from "react"

interface ButtonProps {
  variant: "primary" | "secondary",
  text: string,
  size: 'sm' | 'md' | 'lg',
  startIcon?: ReactElement,
  onClick?: () => void
}

const variantStyles = {
  "primary": "bg-indigo-600 text-white hover:bg-indigo-500",
  "secondary": "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
}

const sizeStyles = {
  "sm": "py-1 px-2",
  'md': 'py-2 px-4',
  'lg': 'py-3 px-6'
}

const defaultStyles = "rounded-md flex items-center gap-2 cursor-pointer"

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${defaultStyles} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`}>
      {props.startIcon} {props.text}
    </button>
  )
}

export default Button
