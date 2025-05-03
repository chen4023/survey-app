import { QuestionList } from '@/types/type';

export const QUESTIONS: QuestionList = [
  {
    title: '질문1 입니다.',
    desc: '설명1 입니다.',
    type: 'text',
    required: true,
    options: {
      placeholder: '10자 이내로 답변해주세요.',
    },
  },
  {
    title: '질문2 입니다.',
    desc: '설명2 입니다.',
    type: 'textarea',
    required: true,
    options: {
      placeholder: '400자 이내로 답변해주세요.',
    },
  },
  {
    title: '질문3 입니다.',
    desc: '설명3 입니다.',
    type: 'select',
    required: true,
    options: {
      items: ['option1', 'option2', 'option3', 'option4', 'option5'],
    },
  },
];
