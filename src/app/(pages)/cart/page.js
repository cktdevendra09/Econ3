import CartUI from '@/app/_components/cart/CartUI'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    return (
        <div className="container mx-auto  ">
            <div className="sm:flex ">
                <div className="  w-full  sm:w-3/4 bg-white sm:px-10 px-2 ">
                    <div className="flex justify-between border-b pb-8 ">
                        <h4 className="font-semibold sm:text-2xl">Shopping Cart</h4>
                         
                    </div>
                     <CartUI />
                     <CartUI />                    
                </div>
                <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 shadow-md mt-5">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                     
                    <div className="border-t mt-8 pb-10" >
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <Link href={'/orders/summary/asdjiosadj'} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart