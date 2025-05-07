import { Question } from '@/types/type';

import useStep from './useStep';
import useSurveyData from './useSurveyData';

export default function useCurrentQuestion(): [Question | undefined, boolean] {
  const { data: survey, isLoading } = useSurveyData();
  const step = useStep();

  return [survey?.questions[step], isLoading];
}
