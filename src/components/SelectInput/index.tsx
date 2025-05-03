type Props = {
  options: {
    items: string[];
  };
  answer: number[];
  setAnswer: (newAnswer: number[]) => void;
};
export default function SelectInput({
  options,
  answer = [],
  setAnswer,
}: Props) {
  const handleChange = (isChecked: boolean, index: number) => {
    if (isChecked) {
      if (!answer.includes(index)) {
        setAnswer([...answer, index]);
      }
    } else {
      setAnswer(answer?.filter((item) => index !== item));
    }
  };
  return (
    <div className="ml-[28px] flex flex-col gap-5">
      {options.items.map((item, index) => (
        <label key={index} className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={answer.includes(index)}
            onChange={(e) => handleChange(e.target.checked, index)}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}
