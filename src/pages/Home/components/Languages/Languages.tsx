import { LANGUAGES } from '../../utils/data'
import { LanguageCard } from './LanguageCard/LanguageCard'
import './Languages.scss'

export const Languages = () => {
    return (
        <section className="languages-container mb-[4rem]">
            <h5 className='mb-[2.5rem]'>Languages</h5>
            <div className='flex sm:flex-row flex-col gap-5'>
                {LANGUAGES.map((item) =>
                    <LanguageCard key={item.title} details={item} />
                )}
            </div>
        </section>
    )
}
