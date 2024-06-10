import ForgetPasswordUI from '@/app/_components/auth/forgetPassword/ForgetPasswordUI'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-full shadow-md pb-5">
      <div className="py-8 px-8 rounded-xl">
        <div className="flex flex-col items-center justify-center text-center space-y-2 mb-14">
          <div className="font-semibold text-3xl">
            <p>Forget Password</p>
          </div>
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email sa@dipainhouse.com</p>
          </div>
        </div>
        <ForgetPasswordUI />
        <p className="mt-14 text-xs text-center font-light text-gray-400"> Dont have an account?
          <Link href="/signup" className="text-black font-medium"> Create New </Link>  </p>
      </div>
    </div>
  )
}

export default ForgetPassword