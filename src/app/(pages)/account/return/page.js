
import ReturnProductUI from '@/app/_components/product/ReturnProductUI'
import React from 'react'

const Return = () => {
  return (
    <div className="relative flex flex-col  break-words w-full mb-6 ">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
      <p className="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <div className="pt-5">
      <ReturnProductUI />
    </div>
  </div>
  )
}

export default Return