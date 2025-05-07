import { useNavigate } from 'react-router';

import Button from '@/components/Button';
import useStep from '@/hooks/useStep';
import useSurveyData from '@/hooks/useSurveyData';

export default function ActionButtons() {
  const step = useStep();
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
        <Button type="submmit" onClick={() => navigate(`/done`)}>
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
