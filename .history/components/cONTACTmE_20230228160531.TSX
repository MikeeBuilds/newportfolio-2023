import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

function ContactMe({}: Props) {
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

          <div>
            <div className='flex items-center space-x-5 justify-center '>
              <PhoneIcon className='h-10 w-10 text-blue-500 animate-ping' />
              <p className=''>+123456789</p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactMe