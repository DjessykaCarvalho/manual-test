'use client'

import { IQuestionProps } from '@/data/questions'
import {
  Options,
  QuestionContainer,
  RadioInputOption,
  RadioLabel,
  Title
} from './styles'

interface IQuestionComponentProps {
  itemQuestion: IQuestionProps
  name: string
  onChange(arg0: string, arg1: string, arg2: boolean): void
  checked: string
}

const QuestionComponent = ({
  itemQuestion,
  name,
  onChange,
  checked
}: IQuestionComponentProps) => {
  const getImage = (imageString: string) => (
    <div dangerouslySetInnerHTML={{ __html: imageString }} />
  )

  return (
    <QuestionContainer>
      <Title>{itemQuestion.question}</Title>
      <Options>
        {itemQuestion.options.map((item, i) => (
          <RadioLabel key={i}>
            <RadioInputOption
              name={name}
              value={String(item.value)}
              checked={checked === String(item.value)}
              onChange={() =>
                onChange(name, String(item.value), item.isRejection)
              }
            />
            {item.display.includes('img')
              ? getImage(item.display)
              : item.display}
          </RadioLabel>
        ))}
      </Options>
    </QuestionContainer>
  )
}

export default QuestionComponent
