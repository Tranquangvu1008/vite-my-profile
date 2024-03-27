import { useRef } from 'react'
import './WorkExperience.scss'
import { ExperienceCard } from './ExperienceCard/ExperienceCard'
import Slider from "react-slick";
import arrowLeftSVG from '../../assets/icons/arrow_left.svg'
import arrowRightSVG from '../../assets/icons/arrow_right.svg'
import { WORK_EXPERIENCE } from '../../utils/data';

export const WorkExperience = () => {
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const slideRight = () => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    const slideLeft = () => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }
    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>
            <div className='experience-content'>
                <div className='arrow-right' onClick={slideRight}>
                    <img src={arrowRightSVG} alt='' />
                </div>
                <div className='arrow-left' onClick={slideLeft}>
                    <img src={arrowLeftSVG} alt='' />
                </div>
                <Slider ref={sliderRef} {...settings} adaptiveHeight={true}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>

            </div>
        </section>
    )
}
