import './Hero.scss'

import linkedIn from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import zalo from '../../assets/icons/zalo.svg'
import avatar from '../../assets/images/avatar.jpg'
import { Social } from './Components/Social'

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
                    <Social collapsed={collapsed} link='https://www.linkedin.com/in/quangvutran/' img={linkedIn} alt='linkedin' />
                    <Social collapsed={collapsed} link='https://github.com/Tranquangvu1008' img={github} alt='github' />
                    <Social collapsed={collapsed} link='https://zalo.me/0852602740' img={zalo} alt='zalo' />
                </div>
            </div>
        </section>
    )
}

export default Hero