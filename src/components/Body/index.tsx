import SelectInput from '@/components/SelectInput';
import TextAreaInput from '@/components/TextAreaInput';
import TextInput from '@/components/TextInput';
import { BodyProps } from '@/types/type';

export default function Body({ type, options, answer, setAnswer }: BodyProps) {
  let InputComponent;
  if (type === 'select') {
    InputComponent = (
      <SelectInput options={options} answer={answer} setAnswer={setAnswer} />
    );
  } else if (type === 'text') {
    InputComponent = (
      <TextInput options={options} answer={answer} setAnswer={setAnswer} />
    );
  } else if (type === 'textarea') {
    InputComponent = (
      <TextAreaInput options={options} answer={answer} setAnswer={setAnswer} />
    );
  }
  return <div className="w-full">{InputComponent}</div>;
}
