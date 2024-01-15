import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick: () => void
  color?: 'primary' | 'secondary' | 'danger'
}

const Button = ({ children, onClick, color = 'danger' }: Props) => {
  return (
    <>
      <button onClick={onClick} className={'btn btn-' + color}>
        {children}
      </button>
    </>
  )
}

export default Button
