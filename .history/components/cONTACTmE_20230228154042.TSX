import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
                    mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            Contact Me
        </h3>
    </div>
  )
}

export default ContactMe