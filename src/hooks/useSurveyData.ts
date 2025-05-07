import { useQuery } from '@tanstack/react-query';

import { getQuestion } from '@/services/apis/getQuestion';
import { Survey } from '@/types/type';

import useSurveyId from './useSurveyId';

export default function useSurveyData() {
  const surveyId = useSurveyId();
  return useQuery<Survey>({
    queryKey: ['survey', surveyId],
    queryFn: async () => {
      const res = await getQuestion(surveyId);
      return res.data;
    },
    enabled: !!surveyId,
  });
}
