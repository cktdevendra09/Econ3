import React from 'react'

const SignUpUI = () => {
    return (
        <form action="" className="mt-6">
            <div className=" text-sm">                
                <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
            </div>
            <div className=" text-sm">                
                <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
            </div>
            <div className=" text-sm">                
                <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
            </div>
            <div className=" text-sm">                
                <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />                
            </div>

            <button type="submit" class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm">
                Sign Up
            </button>
        </form>
    )
}

export default SignUpUI