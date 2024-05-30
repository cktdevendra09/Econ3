import Link from 'next/link'
import React from 'react'

const OrderUi = () => {
    return (
        <Link href={'/orders/asdjisadd'} class="border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 mt-2">
            {/* <p class="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p> */}
            <div class="grid grid-cols-6 p-5 gap-y-2">
                <div>
                    <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
                </div>
                <div class="col-span-5 md:col-span-4 ml-4">
                    {/* <p class="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}
                    <p class="text-gray-600 font-bold"> [Intermediate/Advanced] Tea Time Conversation </p>
                    <p class="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>
                    {/* <p class="text-gray-400"> Details </p> */}
                </div>
            </div>
        </Link>
    )
}

export default OrderUi