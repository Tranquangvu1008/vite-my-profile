import React from 'react'
import './ContactForm.scss'

export const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form>
                <div className='name-container'>
                    <input type='text' name='firstname' placeholder='First Name' />
                    <input type='text' name='lastname' placeholder='Last Name' />
                </div>
                <input type='text' name='email' placeholder='Email' />
                <textarea name='message' placeholder='Message' rows={3} />

                <button>SEND</button>
            </form>
        </div>
    )
}
