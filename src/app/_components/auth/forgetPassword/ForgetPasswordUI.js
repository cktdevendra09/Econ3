import Link from 'next/link'
import React from 'react'

const ForgetPasswordUI = () => {
    return (
        <form action="" className="mt-6">            
            <div className="my-5 text-sm mb-10">
                <label for="password" className="block text-black">Registor Email</label>
                <input type="email" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />                
            </div>
            <Link href={'/otp-varification'} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm">
                OTP Varification
            </Link>
        </form>
    )
}

export default ForgetPasswordUI