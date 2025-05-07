import { mainApi } from './mainApi';

export const getQuestion = (surveyId: number) => {
  return mainApi.get(`/surveys/${surveyId}`);
};
