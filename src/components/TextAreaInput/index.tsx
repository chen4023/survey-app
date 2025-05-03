type Props = {
  options: {
    placeholder: string;
  };
  answer: string;
  setAnswer: (newAnswer: string) => void;
};
export default function TextAreaInput({ options, answer, setAnswer }: Props) {
  return (
    <div className="flex-center">
      <textarea
        value={answer ?? ''}
        onChange={(e) => setAnswer(e.target.value)}
        className="ml-[28px] min-h-[196px] w-full rounded-[5px] border border-[#E0E0E0] px-[18px] py-[12px] text-lg"
        placeholder={options.placeholder}
      />
    </div>
  );
}
