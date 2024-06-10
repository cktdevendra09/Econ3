import ProductUI from '@/app/_components/product/ProductUI'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <div className="space-y-6 px-2 sm:px-10 pb-16 bg-white  sm:pl-20 ">
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0" >
                <div className='hidden space-y-6  pb-16 md:block border'>
                    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                        <Link href={'/account'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" >Profile</Link>
                        <Link href={'/account/orders'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" >My Orders</Link>
                        <Link href={'/account/address'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" >My Address</Link>
                        <Link href={'/account/wallet'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" >Wallet</Link>
                        <Link href={'/account/return'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" >Returns</Link>
                        <Link href={'/account/settings'} className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start" >Account Setting</Link>
                    </nav>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-4">
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                        <ProductUI />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category