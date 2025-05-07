import { useParams } from 'react-router';

export default function useSurveyId() {
  const params = useParams();
  const surveyId = parseInt(params.surveyId!);
  return surveyId;
}
