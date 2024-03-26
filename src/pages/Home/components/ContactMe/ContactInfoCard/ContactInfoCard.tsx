import React from 'react'
import './ContactInfoCard.scss'
import logoSVG from "../../../assets/icons/zalo.svg"

interface ContactInfoCardProps {
    iconUrl: any,
    text: any
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ iconUrl, text }) => {
    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={logoSVG} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
}
