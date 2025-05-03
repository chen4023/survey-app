import { useState } from 'react';
import { useParams } from 'react-router';

import ProgressIndicator from '@/components/ProgressIndicator';
import QuestionBox from '@/components/QuestionBox';
import { QUESTIONS } from '@/constants/question';
import { QuestionList } from '@/types/type';

export default function SurveyPage() {
  const [answers, setAnswers] = useState<(string | number[])[]>([]);
  const { step } = useParams();
  const STEP = parseInt(step!);
  console.log(answers);
  const questions: QuestionList = QUESTIONS;
  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[STEP]}
        questionLength={questions.length}
        step={STEP}
        answer={answers[STEP]}
        setAnswer={(newAnswer: string | number[]) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[STEP] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}
