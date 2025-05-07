import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router';

import Button from '@/components/Button';
import useStep from '@/hooks/useStep';
import useSurveyData from '@/hooks/useSurveyData';
import useSurveyId from '@/hooks/useSurveyId';
import { postAnswers } from '@/services/postAnswers';
import { answersAtom } from '@/stores/answers/atom';

export default function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAtomValue(answersAtom);
  const { data: survey } = useSurveyData();
  const questionLength = survey?.questions?.length;
  let isLast;
  if (questionLength) {
    isLast = questionLength - 1 === step;
  }
  const navigate = useNavigate();
  return (
    <div className="flex-center absolute bottom-[61px] w-[88%] gap-4">
      {step === 0 || (
        <Button type="prev" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="submmit"
          onClick={() => {
            postAnswers(surveyId, answers);
            navigate(`/done`);
          }}
        >
          제출
        </Button>
      ) : (
        <Button type="next" onClick={() => navigate(`${step + 1}`)}>
          다음
        </Button>
      )}
    </div>
  );
}
