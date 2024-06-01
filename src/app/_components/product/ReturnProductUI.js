import Link from 'next/link'
import React from 'react'

const ReturnProductUI = () => {
    return (
        <div className="relative flex w-full  flex-col rounded-xl bg-transparent text-gray-700 shadow-md p-4">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0  text-gray-700 shadow-none">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="tania andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tania Andrew
                        </h5>
                        <div className="5 flex items-center gap-0">
                            <Link href={'/orders/track/asjdiosad'} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none bg-black border-none text-white text-xs p-2 shadow-sm">
                                TRACK
                            </Link>
                        </div>
                    </div>
                    <p className="block font-sans text-xs font-light leading-relaxed text-blue-gray-900 antialiased">
                        On the Way
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ReturnProductUI