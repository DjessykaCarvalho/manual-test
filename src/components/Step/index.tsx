'use client'

import Image, { StaticImageData } from 'next/image'
import {
  DescriptionContainer,
  StepContainer,
  Subtitle,
  Title,
  Type
} from './styles'

interface IStepProps {
  image: StaticImageData
  backgroundImage: StaticImageData
  description: IStepDescription
  revert?: boolean
}

export interface IStepDescription {
  type: string
  title: string
  subtitle: string
}

const Step = ({ image, description, revert, backgroundImage }: IStepProps) => {
  return (
    <StepContainer revert={revert} backgroundImage={backgroundImage}>
      <div>
        <Image src={image} alt='' />
      </div>
      <DescriptionContainer>
        <Type>{description.type}</Type>
        <Title>{description.title}</Title>
        <Subtitle>{description.subtitle}</Subtitle>
      </DescriptionContainer>
    </StepContainer>
  )
}

export default Step
