import NewAddressUI from '@/app/_components/account/address/newAddress/NewAddressUI'
import React from 'react'

const CreateNewAddress = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">New Address</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div className="flex-auto pt-5">
        <NewAddressUI />
      </div>
    </div>
  )
}

export default CreateNewAddress