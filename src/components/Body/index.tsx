import SelectInput from '@/components/SelectInput';
import TextInput from '@/components/TextInput';

export default function Body({ type }: { type: string }) {
  let InputComponent;
  if (type === 'select') {
    InputComponent = <SelectInput />;
  } else if (type === 'text') {
    InputComponent = <TextInput />;
  } else if (type === 'textarea') {
    InputComponent = null;
  }
  return <div className="w-full">{InputComponent}</div>;
}
