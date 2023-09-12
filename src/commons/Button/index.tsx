'use client'

import { ButtonContainer, Label } from './styles'

interface IButtonProps {
  label: string
  onClick(): void
  disabled?: boolean
}

const Button = ({ label, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>
      <Label>{label}</Label>
    </ButtonContainer>
  )
}

export default Button
