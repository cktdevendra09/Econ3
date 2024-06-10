import OtpVarificationUI from '@/app/_components/auth/otpVarification/OtpVarificationUI'
import Link from 'next/link'
import React from 'react'

const OtpVarification = () => {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-full shadow-md pb-5">
      <div className="py-8 px-8 rounded-xl">
        <div className="flex flex-col items-center justify-center text-center space-y-2 mb-20">
          <div className="font-semibold text-3xl">
            <p>Email Verification</p>
          </div>
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email b@dipainhouse.com</p>
          </div>
        </div>
        <OtpVarificationUI />
         
      </div>
    </div>
  )
}

export default OtpVarification