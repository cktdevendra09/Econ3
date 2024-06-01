import UPIVarificationUI from '@/app/_components/wallet/UPIVarificationUI'
import WithdrawalFormUI from '@/app/_components/wallet/WithdrawalFormUI'
import React from 'react'

const Withdrawal = () => {
  return (
    <div className="relative flex flex-col  break-words w-full mb-6 ">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Withdrawal</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div className="pt-5">
        <UPIVarificationUI />
      </div>

      <div className="pt-5">
        <WithdrawalFormUI />
      </div>
    </div>
 
  )
}

export default Withdrawal