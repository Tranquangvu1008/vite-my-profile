import './LanguageCard.scss'

type LanguageCardProps = {
    details: any
}
export const LanguageCard = ({ details }: LanguageCardProps) => {
    return (
        <div className='p-3 border-[1px] rounded-md border-solid border-[#03a7ff] w-full'>
            <div className='flex gap-2 items-center'>
                <img className=' h-5' src={details.iconUrl} alt='flag' />
                <h5 className='!text-[1.2rem]'>{details.title}</h5>
            </div>
            <h6 className='text-[1rem]'>{details.level}</h6>
        </div>
    )
}
