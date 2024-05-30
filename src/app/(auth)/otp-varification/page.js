import OtpVarificationUI from '@/app/_components/auth/otpVarification/OtpVarificationUI'
import Link from 'next/link'
import React from 'react'

const OtpVarification = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <div class="flex flex-col items-center justify-center text-center space-y-2 mb-20">
          <div class="font-semibold text-3xl">
            <p>Email Verification</p>
          </div>
          <div class="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email ba**@dipainhouse.com</p>
          </div>
        </div>
        <OtpVarificationUI />
         
      </div>
    </div>
  )
}

export default OtpVarification