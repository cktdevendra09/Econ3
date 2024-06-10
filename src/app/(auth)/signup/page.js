import SignUpUI from '@/app/_components/auth/signup/SignUpUI'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-full shadow-md pb-5">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">SignUp</h1>
        <SignUpUI />
        <p className="mt-12 text-xs text-center font-light text-gray-400"> I have an account?
          <Link href="/signin" className="text-black font-medium"> Signin </Link>  </p>
      </div>
    </div>
  )
}

export default SignUp