import ActionButtons from '@/components/ActionButtons';
import Body from '@/components/Body';
import Desc from '@/components/Desc';
import Title from '@/components/Title';
import { QType } from '@/types/type';
type Props = {
  question: QType;
  questionLength: number;
  step: number;
  // answers: string;
  // setAnswer: (newAnswer: string) => void;
};
export default function QustionBox({ question, questionLength, step }: Props) {
  const { title, desc, type } = question;
  return (
    <div className="survey-container">
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Body type={type} />
      <ActionButtons questionLength={questionLength} step={step} />
    </div>
  );
}
