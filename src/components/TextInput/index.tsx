type Props = {
  options: {
    placeholder: string;
  };
  answer: string;
  setAnswer: (newAnswer: string) => void;
};
export default function TextInput({ options, answer, setAnswer }: Props) {
  return (
    <div className="flex-center">
      <input
        type="text"
        value={answer ?? ''}
        onChange={(e) => setAnswer(e.target.value)}
        className="mx-[28px] w-full rounded-[5px] border border-[#E0E0E0] px-[18px] py-[12px] text-lg"
        placeholder={options.placeholder}
      ></input>
    </div>
  );
}
