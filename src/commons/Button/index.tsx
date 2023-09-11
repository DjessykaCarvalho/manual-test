'use client'

import { ButtonContainer, Label } from './styles'

interface IButtonProps {
  label: string
}

const Button = ({ label }: IButtonProps) => {
  return (
    <ButtonContainer>
      <Label>{label}</Label>
    </ButtonContainer>
  )
}

export default Button
