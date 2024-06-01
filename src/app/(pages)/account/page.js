import ProfileUI from '@/app/_components/account/profile/ProfileUI'
import React from 'react'

const Account = () => {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <div className="mt-4">

        <div className=" block md:flex">

          <div className="w-full md:w-3/5  bg-white mb-10">
             <ProfileUI />
          </div>

          <div className="w-full md:w-2/5">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label for="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex">
                  <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
                </div>
              </div>
              <div className="pb-4">
                <label for="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Account