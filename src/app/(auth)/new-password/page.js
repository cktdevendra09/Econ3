import NewPasswordUI from '@/app/_components/auth/new-password/NewPasswordUI'
import Link from 'next/link'
import React from 'react'

const NewPassword = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-full shadow-md pb-5">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <NewPasswordUI />

      </div>
    </div>
  )
}

export default NewPassword