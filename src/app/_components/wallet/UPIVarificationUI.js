import React from 'react'

const UPIVarificationUI = () => {
    return (
        <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
                <label for="email">                    
                    <input id="text" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter UPI ID" />
                </label>
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">                   
                    <span>UPI Varification </span>
                </button>
                
            </div>
        </form>

    )
}

export default UPIVarificationUI