import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'

export const PaginationSection = ({ goToPrevPage, goToNextPage, currentRecords }: any) => {
    return (
        <section className="flex gap-3 items-center justify-end">
            <div>
                <p className='break-words'>Showing <strong>{currentRecords.length}</strong> Entries</p>
            </div>
            <div className="flex">
                <button className="flex flex-col sm:flex-row gap-1 items-center bg-[#1f40af] text-white px-2 rounded-l-lg" onClick={goToPrevPage}>
                    <img src={arrowLeft} alt="" className="w-8 text-white" />
                    <p>Prev</p>
                </button>
                <div className="w-[1px] bg-black" />
                <button className="flex flex-col sm:flex-row gap-1 items-center bg-[#1f40af] text-white px-2 rounded-r-lg" onClick={goToNextPage}>
                    <p>Next</p>
                    <img src={arrowRight} alt="" className="w-8" />
                </button>
            </div>
        </section>
    );
};