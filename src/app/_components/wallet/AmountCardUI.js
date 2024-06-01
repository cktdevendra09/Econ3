import Link from 'next/link'
import React from 'react'

const AmountCardUI = () => {
    return (
        <div className="flex flex-col justify-center p-10 sm:p-14  w-full bg-gray-50 dark:bg-gray-800 space-y-6 shadow-md ">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Wallet</h3>
            <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                    </div>
                </div>
                <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <Link href={'/account/wallet/withdrawal'} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm">withdrawal</Link>
            </div>
        </div>
    )
}

export default AmountCardUI