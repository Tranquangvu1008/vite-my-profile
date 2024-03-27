import React from 'react'
import './ContactInfoCard.scss'

interface ContactInfoCardProps {
    iconUrl: any,
    text: any,
    label: string
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ iconUrl, text, label }) => {
    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={iconUrl} alt={text} />
            </div>
            <a href={`${label === "phone" ? "tel:+84852602740" : "mailto:tranquangvu1008@gmail.com"}`}>
                <p>{text}</p>
            </a>
        </div>
    )
}
