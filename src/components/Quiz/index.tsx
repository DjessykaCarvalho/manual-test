'use client'

import { useState } from 'react'
import { CloseButton, ContainerButtons, Message, QuizContainer } from './styles'
import { questions } from '@/data/questions'
import Button from '@/commons/Button'
import Question from '../Question'
import { answers } from '@/data/answer'

interface IQuizProps {
  handleClose(): void
}

interface IResponse {
  [key: string]: string
}

const Quiz = ({ handleClose }: IQuizProps) => {
  const [responses, setResponses] = useState<IResponse>({})
  const [step, setStep] = useState<number>(1)
  const [fail, setFail] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const numQuestions = questions.length

  const handleResponseChange = (
    name: string,
    value: string,
    isRejection: boolean
  ) => {
    if (isRejection) setFail(true)
    else {
      setResponses((prevState) => ({
        ...prevState,
        [name]: value
      }))
      handleButtonNext()
    }
  }

  const handleButtonBack = () => setStep(step - 1)

  const handleButtonNext = () => {
    if (step !== numQuestions) setStep(step + 1)
    else handleSubmit()
  }

  const handleSubmit = () => {
    setSuccess(true)
  }

  return (
    <QuizContainer>
      <CloseButton onClick={handleClose}>X</CloseButton>
      {!fail && !success && (
        <>
          <Question
            itemQuestion={questions[step - 1]}
            name={`question${step}`}
            checked={responses[`question${step}`]}
            onChange={handleResponseChange}
          />
          <ContainerButtons>
            {step > 1 && <Button label='Back' onClick={handleButtonBack} />}
            <Button
              label={step === numQuestions ? 'Result' : 'Next'}
              onClick={handleButtonNext}
              disabled={!!!responses[`question${step}`]}
            />
          </ContainerButtons>
        </>
      )}
      {fail && <Message>{answers.fail}</Message>}
      {success && (
        <Message dangerouslySetInnerHTML={{ __html: answers.success }} />
      )}
    </QuizContainer>
  )
}

export default Quiz
