// import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { OutletContextType } from '../../../interface';
import { Result } from './components/Result';
import { useGetResult } from './hooks/useGetResult';

const QuestionBoard = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const { categoryQuestions } = useGetResult();

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
                                    <Result key={result.id} result={result} cssColor='bg-green-500' />
                                    : category.totalQuestion[index].submission.status === 'INCORRECT'
                                        ?
                                        <Result key={result.id} result={result} cssColor='bg-red-500' />
                                        : category.totalQuestion[index].submission.status === 'PARTIALLY_CORRECT'
                                            ?
                                            <Result key={result.id} result={result} cssColor='bg-yellow-500' />
                                            : null
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuestionBoard;