import { useState, useEffect } from "react";
import { dataQuestions } from "../data/dataQuestion";
import { dataSubmissions } from "../data/dataSubmissions";
import { fakeApi, statusPriority } from "../utils/utils";
import { SubmissionResponse, CategoryQuestion, QuestionResponse } from "../models";

export const useGetResult = () => {
    const [submission, setSubmission] = useState<SubmissionResponse[]>([]);
    const [categoryQuestions, setCategoryQuestions] = useState<CategoryQuestion[]>([]);

    useEffect(() => {
        fakeApi(dataSubmissions).then((data) => {
            setSubmission(data as SubmissionResponse[])
        })

        fakeApi(dataQuestions).then((data) => {
            const questions: CategoryQuestion[] = [];

            (data as QuestionResponse[]).forEach((dataQuestion) => {

                const existingCategoryItem = questions.find(question => question.category === dataQuestion.category);
                const checkSubmission = submission.some((sub) => sub.questionId === dataQuestion.id)

                if (existingCategoryItem) {
                    if (checkSubmission) {
                        submission.forEach((sub) => {
                            if (sub.questionId === dataQuestion.id) {
                                const dataQuestionWithSubmission = { ...dataQuestion, submission: sub };
                                existingCategoryItem.totalQuestion.push(dataQuestionWithSubmission);

                                if (dataQuestionWithSubmission.submission.status === "CORRECT") {
                                    questions.forEach((ques) => {
                                        if (ques.category === dataQuestionWithSubmission.category) {
                                            ques.totalCorrect++;
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        const dataQuestionWithSubmission = { ...dataQuestion, submission: {} as SubmissionResponse };
                        existingCategoryItem.totalQuestion.push(dataQuestionWithSubmission);
                    }
                } else {
                    if (checkSubmission) {
                        submission.forEach((sub) => {
                            if (sub.questionId === dataQuestion.id) {
                                const dataQuestionWithSubmission = { ...dataQuestion, submission: sub };
                                questions.push({
                                    category: dataQuestion.category, totalQuestion: [dataQuestionWithSubmission],
                                    totalCorrect: dataQuestionWithSubmission.submission.status === "CORRECT" ? 1 : 0
                                });
                            }
                        });
                    }
                    else {
                        const dataQuestionWithSubmission = { ...dataQuestion, submission: {} as SubmissionResponse };
                        questions.push({
                            category: dataQuestion.category, totalQuestion: [dataQuestionWithSubmission],
                            totalCorrect: 0
                        });
                    }
                }
            })

            questions.forEach((value) => {
                value.totalQuestion.sort((a, b) => {
                    const priorityA = statusPriority(a.submission.status);
                    const priorityB = statusPriority(b.submission.status);

                    return priorityA - priorityB;
                });
            }
            );
            setCategoryQuestions(questions);
        })
    }, [submission])

    return { categoryQuestions }
}
