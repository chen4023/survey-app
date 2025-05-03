import ActionButtons from '@/components/ActionButtons';
import Body from '@/components/Body';
import Desc from '@/components/Desc';
import Title from '@/components/Title';
import { Question } from '@/types/type';
type Props = {
  question: Question;
  questionLength: number;
  step: number;
  answer: string | number[] | undefined;
  setAnswer: (newAnswer: string | number[]) => void;
};
export default function QustionBox({
  question,
  questionLength,
  step,
  answer,
  setAnswer,
}: Props) {
  const { title, desc, type } = question;
  return (
    <div className="survey-container relative">
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      {type === 'select' ? (
        <Body
          {...question}
          answer={answer as number[]}
          setAnswer={setAnswer as (newAnswer: number[]) => void}
        />
      ) : (
        <Body
          {...question}
          answer={answer as string}
          setAnswer={setAnswer as (newAnswer: string) => void}
        />
      )}
      <ActionButtons questionLength={questionLength} step={step} />
    </div>
  );
}
