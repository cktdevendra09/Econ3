import Link from 'next/link'
import React from 'react'

const OrderUi = () => {
    return (
        <Link href={'/orders/asdjisadd'}>


            <div className="p-6 bg-white flex items-center space-x-6 rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                <div>
                    <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-md" />
                </div>
                <div className=' text-wrap '>
                    <h1 className="text-xl font-bold text-gray-700 mb-2">Job Security </h1>
                    <p className="text-gray-600 w-80 text-xs">Status</p>
                </div>
            </div>
        </Link>
    )
}

export default OrderUi