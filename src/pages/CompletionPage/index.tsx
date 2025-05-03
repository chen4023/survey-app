import ReloadIcon from '@/components/ReloadIcon';

export default function CompletionPage() {
  return (
    <div className="survey-container flex-center flex-col">
      <img src="/public/8.png" alt="completed" />
      <h2 className="h2 mb-14">설문이 완료되었습니다.</h2>
      <button className="group flex-center h-[56px] w-[240px] gap-3 rounded-sm border border-[#6542F1] hover:border-[#AF9BFF]">
        <ReloadIcon className="fill-[#6542F1] transition-colors duration-200 group-hover:fill-[#AF9BFF]" />
        <p className="text-lg font-semibold text-[#6542F1] transition-colors duration-200 group-hover:text-[#AF9BFF]">
          새로운 응답 제출하기
        </p>
      </button>
    </div>
  );
}
