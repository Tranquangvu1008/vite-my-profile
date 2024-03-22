// import React from 'react';
import { useEffect, useState } from 'react';
import { dataQuestions } from './dataQuestion';
import { dataSubmissions } from './dataSubmissions';
import { useOutletContext } from 'react-router-dom';
import { fakeApi, statusPriority } from './utils/utils';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type CategoryQuestion = {
    category: string;
    totalQuestion: QuestionResponse[];
    totalCorrect: number;
};

type QuestionResponse = {
    id: string,
    name: string,
    category: string;
    submission: SubmissionResponse;
};

type SubmissionResponse = {
    questionId: string;
    status: string
};

export const QuestionBoard = () => {
    const collapsed: boolean = useOutletContext();
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

    return (
        <div>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Question Board</title>
                        <meta name="description" content="Question board task was guided by Tony Nguyen" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <div className={`flex flex-col gap-10 justify-between py-5 md:flex-row md:gap-4 ${collapsed ? 'px-10' : 'px-4'}`}>
                {categoryQuestions && categoryQuestions.map((category) =>
                    <div key={category.category} className="w-full">
                        <h2>{category.category} - {category.totalCorrect}/{category.totalQuestion.length}</h2>

                        <div className="flex flex-col gap-4">
                            {category.totalQuestion && category.totalQuestion.map((result, index) =>
                                category.category === category.totalQuestion[index].category &&
                                    category.totalQuestion[index].submission && category.totalQuestion[index].submission.status === 'CORRECT'
                                    ?
                                    <div key={result.id} className='flex p-2 gap-1 border-[1px] border-solid '>
                                        <div className="flex-shrink-0 w-4 h-4 rounded-full mr-1 bg-green-500 self-center" />
                                        <h2 className="">{result.name}</h2>
                                    </div>
                                    : category.totalQuestion[index].submission.status === 'INCORRECT'
                                        ?
                                        <div key={result.id} className='flex p-2 gap-1 border-[1px] border-solid '>
                                            <div className="flex-shrink-0 w-4 h-4 rounded-[100%] mr-1 bg-red-500 self-center" />
                                            <h2 className="">{result.name}</h2>
                                        </div>
                                        : category.totalQuestion[index].submission.status === 'PARTIALLY_CORRECT'
                                            ?
                                            <div key={result.id} className='flex p-2 gap-1 border-[1px] border-solid '>
                                                <div className="flex-shrink-0 w-4 h-4 rounded-[100%] mr-1 bg-yellow-500 self-center" />
                                                <h2 className="">{result.name}</h2>
                                            </div>
                                            : null
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}