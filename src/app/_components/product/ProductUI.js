import Link from 'next/link'
import React from 'react'

const ProductUI = () => {
    return (
        <div className="relative group shadow-md  rounded-md overflow-hidden">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <Link href={'/p/asdsadss'}>
                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png" alt="" />
                </Link>
            </div>
            <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
            </div>
            <div className="px-4 py-3 ">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <Link href={'/p/asdsadss'} className="text-lg font-bold text-black truncate block capitalize">Product Name</Link>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p className="  text-gray-600 text-xs cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUI