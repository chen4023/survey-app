import { useParams } from 'react-router';

export default function useStep() {
  const params = useParams();
  const step = parseInt(params.step!);
  return step;
}
