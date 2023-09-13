'use client'

import Step from '../Step'
import { ContainerSteps, ProductContainer, Title } from './styles'
import step1 from '@/assets/images/Step1.png'
import step2 from '@/assets/images/Step2.png'
import background1 from '@/assets/images/01.png'
import background2 from '@/assets/images/02.png'
import { stepDescriptions } from '@/data/stepDescription'

const Product = () => {
  return (
    <ProductContainer>
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
    </ProductContainer>
  )
}

export default Product
