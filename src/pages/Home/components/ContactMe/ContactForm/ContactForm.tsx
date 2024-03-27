import './ContactForm.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface ContactFormInput {
    firstName: string
    lastName: string
    email: string
    message: string
}

export const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormInput>();

    const onSubmit: SubmitHandler<ContactFormInput> = () => {
        if (form.current) {
            emailjs
                .sendForm('service_mkny5np', 'template_h3715y3', form.current, 'XKxAI8Uc0KBB8CU76')
                .then(
                    () => {
                        reset();
                    },
                );
        }
    };

    return (
        <div className='contact-form-content'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className='name-container '>
                    <div className='flex-1 self-baseline w-full'>
                        <input type='text' className='' {...register("firstName", { required: true, maxLength: 20 })} placeholder='First Name' />
                        {errors?.firstName?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}
                        {errors?.firstName?.type === "maxLength" && (
                            <p className='mt-1 text-red-400'>First name cannot exceed 20 characters</p>
                        )}
                    </div>
                    <div className='flex-1 self-baseline w-full'>
                        <input type='text' {...register("lastName", { required: true, maxLength: 20 })} placeholder='Last Name' />
                        {errors?.lastName?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}
                        {errors?.lastName?.type === "maxLength" && (
                            <p className='mt-1 text-red-400'>Last name cannot exceed 20 characters</p>
                        )}
                    </div>
                </div>
                <div>
                    <input type='email' {...register("email", { required: true, maxLength: 30 })} placeholder='Email' />
                    {errors?.email?.type === "required" && <p className='mt-1 text-red-400'>This field is required</p>}
                    {errors?.email?.type === "maxLength" && (
                        <p>Email cannot exceed 30 characters</p>
                    )}
                </div>
                <div>
                    <textarea {...register("message", { required: true, maxLength: 200 })} placeholder='Message' rows={3} />
                    {errors?.message?.type === "required" && <p className='mt-1 text-red-400'>This field is required</p>}
                    {errors?.message?.type === "maxLength" && (
                        <p className='mt-1 text-red-400'>Message cannot exceed 200 characters</p>
                    )}
                </div>
                <button>SEND</button>
            </form>
        </div>
    )
}
