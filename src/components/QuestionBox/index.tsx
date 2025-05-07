import ActionButtons from '@/components/ActionButtons';
import Body from '@/components/Body';
import Desc from '@/components/common/Desc';
import Heading from '@/components/common/Heading';
import useCurrentAnswer from '@/hooks/useCurrentAnswer';
import useCurrentQuestion from '@/hooks/useCurrentQuestion';

export default function QustionBox() {
  // 전역 상태 (Q,A)
  const [question, isLoading] = useCurrentQuestion();
  const [answer, handleChangeAnswer] = useCurrentAnswer();

  if (isLoading) {
    return <div>로딩중 ...</div>; // 예외 처리
  }
  if (!question) {
    return <div>잘못된 질문 번호입니다.</div>;
  }

  const { title, desc, type, options } = question;
  return (
    <div className="survey-container relative">
      <Heading>{title}</Heading>
      <Desc>{desc}</Desc>
      {type === 'select' ? (
        <Body
          type={type}
          options={options}
          answer={answer as number[]}
          setAnswer={handleChangeAnswer as (newAnswer: number[]) => void}
        />
      ) : (
        <Body
          type={type}
          options={options}
          answer={answer as string}
          setAnswer={handleChangeAnswer as (newAnswer: string) => void}
        />
      )}
      <ActionButtons />
    </div>
  );
}
