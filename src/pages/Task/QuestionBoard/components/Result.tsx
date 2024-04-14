import { QuestionResponse } from "../models"

interface ResultProps {
    result: QuestionResponse
    cssColor: string
}
export const Result: React.FC<ResultProps> = ({ result, cssColor }) => {
    return (
        <div className='flex p-2 gap-1 border-[1px] border-solid '>
            <div className={`flex-shrink-0 w-4 h-4 rounded-full mr-1 self-center ${cssColor}`} />
            <h2 className="">{result.name}</h2>
        </div>
    )
}
