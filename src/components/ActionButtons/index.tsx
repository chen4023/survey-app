import { useNavigate } from 'react-router';

import Button from '@/components/Button';
type Props = {
  questionLength: number;
  step: number;
};
export default function ActionButtons({ questionLength, step }: Props) {
  const isLast = questionLength - 1 === step;
  const navigate = useNavigate();
  return (
    <div className="flex-center mt-[243px] gap-4">
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
