import { Link } from 'react-router-dom'

interface SocialProps {
    collapsed: boolean,
    link: string,
    img: string,
    alt: string
}

export const Social: React.FC<SocialProps> = ({ collapsed, link, img, alt }) => {
    return (
        <div className={`tech-icon ${!collapsed && 'sm:!w-[5rem] sm:!h-[5rem] !w-[2rem] !h-[2rem]'}`}>
            <Link to={link} target="_blank"><img src={img} alt={alt} /></Link>
        </div>
    )
}
