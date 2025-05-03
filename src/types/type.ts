type QuestionBase = {
  title: string;
  desc: string;
  required: boolean;
};

export type TextQuestion = QuestionBase & {
  type: 'text';
  options: {
    placeholder: string;
  };
};

export type TextareaQuestion = QuestionBase & {
  type: 'textarea';
  options: {
    placeholder: string;
  };
};

export type SelectQuestion = QuestionBase & {
  type: 'select';
  options: {
    items: string[];
  };
};

// 모든 질문 타입을 유니언으로 묶음
export type Question = TextQuestion | TextareaQuestion | SelectQuestion;

// 전체 질문 목록 타입
export type QuestionList = Question[];

export type BodyProps =
  | {
      type: 'text' | 'textarea';
      options: {
        placeholder: string;
      };
      answer: string;
      setAnswer: (newAnswer: string) => void;
    }
  | {
      type: 'select';
      options: {
        items: string[];
      };
      answer: number[];
      setAnswer: (newAnswer: number[]) => void;
    };
