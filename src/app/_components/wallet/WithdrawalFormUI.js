import React from 'react'

const WithdrawalFormUI = () => {
    return (
        <div className="bg-gray-100 p-5 rounded-md shadow-md">
            <div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-10">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Ammout
                            </label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="100 " />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                Select UPI
                            </label>

                         
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default WithdrawalFormUI