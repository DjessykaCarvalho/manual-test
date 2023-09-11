'use client'

import Step from '../Step'
import { stepDescriptions } from './stepDescription'
import { ContainerSteps, HairContainer, Title } from './styles'
import step1 from '@/assets/images/Step1.png'
import step2 from '@/assets/images/Step2.png'
import background1 from '@/assets/images/01.png'
import background2 from '@/assets/images/02.png'

const Hair = () => {
  return (
    <HairContainer>
      <Title>What we can help with</Title>
      <ContainerSteps>
        <Step
          image={step1}
          backgroundImage={background1}
          description={stepDescriptions.step1}
        />
        <Step
          image={step2}
          backgroundImage={background2}
          description={stepDescriptions.step2}
          revert
        />
      </ContainerSteps>
    </HairContainer>
  )
}

export default Hair
