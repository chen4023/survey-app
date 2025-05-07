import { Suspense } from 'react';

import ProgressIndicator from '@/components/ProgressIndicator';
import QuestionBox from '@/components/QuestionBox';

export default function SurveyPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Suspense fallback={<div>로딩중...</div>}>
        <ProgressIndicator />
        <QuestionBox />
      </Suspense>
    </div>
  );
}
