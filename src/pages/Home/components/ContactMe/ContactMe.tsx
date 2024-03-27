import './ContactMe.scss'
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard'
import { ContactForm } from './ContactForm/ContactForm'

export const ContactMe = () => {
    return (
        <section id="elem3" className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div>
                    <ContactInfoCard iconUrl={"https://cdn-icons-png.flaticon.com/512/2972/2972016.png"} text={"0852602740"} label='phone' />
                    <ContactInfoCard iconUrl={"https://cdn-icons-png.flaticon.com/512/3649/3649439.png"} text={"tranquangvu@gmail.com"} label='email' />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
