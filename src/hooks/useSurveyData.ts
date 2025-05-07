import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Survey } from '@/types/type';

import useSurveyId from './useSurveyId';

export default function useSurveyData() {
  const surveyId = useSurveyId();
  return useQuery<Survey>({
    queryKey: ['survey', surveyId],
    queryFn: () =>
      axios
        .get(`http://localhost:3001/surveys/${surveyId}`)
        .then((res) => res.data),
  });
}
