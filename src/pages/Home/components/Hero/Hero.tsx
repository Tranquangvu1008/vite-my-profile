import './Hero.scss'

import linkedIn from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import zalo from '../../assets/icons/zalo.svg'
import avatar from '../../assets/images/avatar.jpg'
import { Link } from 'react-router-dom'

type HeroProps = {
    collapsed: boolean
}

const Hero = ({ collapsed }: HeroProps) => {
    return (
        <section className="hero-container">
            <div className='hero-content'>
                <h2 className={`${!collapsed && 'sm:!text-[3.8rem] sm:!leading-[5rem] !text-3xl'}`}>Hi! I'm Tran Quang Vu, a Front-end Developer</h2>
                <h4 className={`${!collapsed && 'sm:!text-[1.5rem] !text-[1rem]'}`}>
                    "The purpose of software engineering is to control complexity, not create complexity.""
                </h4>
            </div>
            <div className='hero-img'>
                <div>
                    <img src={avatar} alt='' className={`${!collapsed && 'sm:!w-[35rem] !w-52'}`} />
                </div>
                <div>
                    <div className={`tech-icon ${!collapsed && 'sm:!w-[5rem] sm:!h-[5rem] !w-[2rem] !h-[2rem]'}`}>
                        <Link to={'https://www.linkedin.com/in/quangvutran/'} target="_blank"><img src={linkedIn} alt="linkedin" /></Link>
                    </div>
                    <div className={`tech-icon ${!collapsed && 'sm:!w-[5rem] sm:!h-[5rem] !w-[2rem] !h-[2rem]'}`}>
                        <Link to={'https://github.com/Tranquangvu1008'} target='_blank'><img src={github} alt='github' /></Link>
                    </div>
                    <div className={`tech-icon ${!collapsed && 'sm:!w-[5rem] sm:!h-[5rem] !w-[2rem] !h-[2rem]'}`}>
                        <Link to={'https://zalo.me/0852602740'} target='_blank'><img src={zalo} alt='zalo' /></Link>
                    </div>
                    {/* <div className={`tech-icon ${!collapsed && 'sm:!w-[5rem] sm:!h-[5rem] !w-[2rem] !h-[2rem]'}`}>
                        <img src={squareSVG} alt='' />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero