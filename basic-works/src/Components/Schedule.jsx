import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Schedule = () => {
  return (
    <div className='flex justify-center items-center mx-auto my-12'>
        <div className='flex flex-col text-center gap-6'>
            <h2 className='lg:text-3xl text-2xl font-semibold'>SCHEDULE AN ESTIMATION</h2>
            <p className='text-md lg:text-lg'>We will get back to you in the email provided</p>
            <Link to='/Contact'>
                <Button text="Click Here" variant="primary" />
            </Link>
        </div>
    </div>
  )
}

export default Schedule