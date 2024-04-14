export type CategoryQuestion = {
    category: string;
    totalQuestion: QuestionResponse[];
    totalCorrect: number;
};

export type QuestionResponse = {
    id: string,
    name: string,
    category: string;
    submission: SubmissionResponse;
};

export type SubmissionResponse = {
    questionId: string;
    status: string
};
