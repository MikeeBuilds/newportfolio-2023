import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


type Props = {}

function ContactMe({}: Props) {
const { 
  register, 
  handleSubmit, 
} = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:citizensofandrometta@gmail.com?subject=Hi, my name is ${}{formData.message}=
      ${formData.message}`;
    };
  
  return (
    <div className='h-screen flex relative flex-col text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
                    mx-auto items-center'>
        <h3 className='animate-pulse absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            Contact Me
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Ive got just what you need!{" "}
                <span className='underline text-blue-500'>Get In Contact</span> Lets get to work!
            </h4>

          <div className='space-y-6'>
            <div className='flex items-center space-x-5 justify-center '>
              <PhoneIcon className='h-10 w-10 text-blue-500 animate-pulse' />
              <p className='text-2xl'>+1234567890</p>
            </div>

            <div className='flex items-center space-x-5 justify-center '>
              <MapPinIcon className='h-10 w-10 text-blue-500 animate-pulse' />
              <p className='text-2xl'>1234 Main St, City, State, 12345</p>
              </div>

            <div className='flex items-center space-x-5 justify-center '>
              <EnvelopeIcon className='h-10 w-10 text-blue-500 animate-pulse' />
              <p className='text-2xl'>
                <a href='mailto:
                ' className='underline text-blue-500'>Citizensofandrometta@gmail.com</a>
              </p>
              </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'> 
                <input {...register('name')} placeholder='Name' className='contactInput' 
                type="text" />
                <input {...register("email")} placeholder='Email' className='contactInput' 
                type="email" />
            </div>

            <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />

            <textarea {...register("message")} placeholder='Message' className='contactInput' />
            <button 
              type='submit' 
              className='bg-blue-500 text-white px-5 py-2 rounded-lg font-bold
            text-lg'
            >
                    Submit 📨
            </button>
          </form>
        </div>
    </div>
  )
}

export default ContactMe