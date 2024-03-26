import './ContactMe.scss'
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard'
import { ContactForm } from './ContactForm/ContactForm'

export const ContactMe = () => {
    return (
        <section id="elem3" className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard iconUrl={""} text={"asda@gmail.com"} />
                    <ContactInfoCard iconUrl={""} text={"asda@gmail.com"} />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
