import SignInUI from '@/app/_components/auth/signin/SignInUI'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <SignInUI />
        <p className="mt-12 text-xs text-center font-light text-gray-400"> Dont have an account? 
        <Link href="/signup" className="text-black font-medium"> Create New </Link>  </p>
      </div>
    </div>
  )
}

export default SignIn