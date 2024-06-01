import AddressUI from '@/app/_components/account/address/AddressUI'
import Link from 'next/link'
import React from 'react'

const Address = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
      <div className="space-y-0.5 mb-5">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">
            My Address
          </h6>
          

          <Link href={'/account/address/create'} className="bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
            Add New
          </Link>

        </div>
      </div>
      <div className="">
        <AddressUI />
      </div>
    </div>
  )
}

export default Address