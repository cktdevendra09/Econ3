import React from 'react'

const CartUI = () => {
    return (
        <div className="md:flex items-strech  border rounded-md mt-2">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center px-2 py-2">
                {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>
                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <div className="flex items-center justify-between ">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 px-5">10,000</p>
                </div>
            </div>
        </div>
    )
}

export default CartUI