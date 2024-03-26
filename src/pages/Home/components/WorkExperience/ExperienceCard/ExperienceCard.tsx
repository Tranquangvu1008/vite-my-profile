import React from 'react'
import './ExperienceCard.scss'
interface ExperienceCardProps {
    details: any
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({ details }) => {
    return (
        <div className='work-experience-card'>
            <h6>{details.title}</h6>
            <div className='work-duration'>{details.date}</div>
            <div className='work-role'>{details.role}</div>
            <ul>
                {details.responsibilities.map((item: any) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <div className='work-technology'>{details.technology}</div>
        </div>
    )
}
