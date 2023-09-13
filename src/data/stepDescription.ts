export interface IStepDescription {
  type: string
  title: string
  subtitle: string
}

interface IStepDescriptionProps {
  step1: IStepDescription
  step2: IStepDescription
}

export const stepDescriptions: IStepDescriptionProps = {
  step1: {
    type: 'Hair loss',
    title: 'Hair loss needn’t be irreversible. We can help!',
    subtitle:
      'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
  },
  step2: {
    type: 'Erecetile dysfunction',
    title: 'Erections can be a tricky thing. But no need to feel down!',
    subtitle:
      'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
  }
}
