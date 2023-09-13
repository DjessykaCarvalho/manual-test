'use client'

import Image, { StaticImageData } from 'next/image'
import {
  DescriptionContainer,
  StepContainer,
  Subtitle,
  Title,
  Type
} from './styles'
import { IStepDescription } from '@/data/stepDescription'

interface IStepProps {
  image: StaticImageData
  backgroundImage: StaticImageData
  description: IStepDescription
  revert?: boolean
}

const Step = ({ image, description, revert, backgroundImage }: IStepProps) => {
  return (
    <StepContainer revert={String(revert)} backgroundimage={backgroundImage}>
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
