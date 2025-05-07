import { mainApi } from './apis/mainApi';

export const postAnswers = (surveyId: number, data: (string | number[])[]) => {
  return mainApi.post('http://localhost:3001/answers', { surveyId, data });
};
