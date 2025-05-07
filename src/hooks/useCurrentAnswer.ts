import { useAtom } from 'jotai';

import { answersState } from '@/stores/answers/atom';

import useStep from './useStep';

export default function useCurrentAnswer() {
  const [answers, setAnswers] = useAtom(answersState);
  const step = useStep();

  const handleChangeAnswer = (newAnswer: string | number[]) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return [answers[step], handleChangeAnswer];
}
