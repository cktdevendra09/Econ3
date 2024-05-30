import ForgetPasswordUI from '@/app/_components/auth/forgetPassword/ForgetPasswordUI'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <div class="flex flex-col items-center justify-center text-center space-y-2 mb-14">
          <div class="font-semibold text-3xl">
            <p>Forget Password</p>
          </div>
          <div class="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email ba**@dipainhouse.com</p>
          </div>
        </div>
        <ForgetPasswordUI />
        <p className="mt-14 text-xs text-center font-light text-gray-400"> Don't have an account?
          <Link href="/signup" className="text-black font-medium"> Create New </Link>  </p>
      </div>
    </div>
  )
}

export default ForgetPassword