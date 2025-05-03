import { useParams } from 'react-router';

import ProgressIndicator from '@/components/ProgressIndicator';
import QuestionBox from '@/components/QuestionBox';
import { QUESTIONS } from '@/constants/question';
import { QType } from '@/types/type';

export default function SurveyPage() {
  const { step } = useParams();
  const STEP = parseInt(step!);
  const questions: QType[] = QUESTIONS;
  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[STEP]}
        questionLength={questions.length}
        step={STEP}
        // answers={answers[STEP]}
        // setAnswer={(newAnswer: string) => {
        //   const newAnswers = [...answers];
        //   newAnswers[STEP] = newAnswer;
        //   setAnswers(newAnswers);
        // }}
      />
    </div>
  );
}
