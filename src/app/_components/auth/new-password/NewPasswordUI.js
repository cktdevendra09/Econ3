import Link from 'next/link'
import React from 'react'

const NewPasswordUI = () => {
  return (
    <form action="" className="mt-6">
      <div className="my-5 text-sm">
        <label for="username" className="block text-black">New Password</label>
        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
      </div>
      <div className="my-5 text-sm">
        <label for="password" className="block text-black">Cofirm Password</label>
        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />        
      </div>

      <Link href={'/'} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm">
        Create New
      </Link>
    </form>
  )
}

export default NewPasswordUI