import AmountCardUI from '@/app/_components/wallet/AmountCardUI'
import TransectionUI from '@/app/_components/wallet/TransectionUI'
import React from 'react'

const Wallet = () => {
    return (
        <div className="relative flex flex-col  break-words w-full mb-6 ">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Wallet</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <div className="pt-5">
                <AmountCardUI />
            </div>

            <div className="space-y-0.5 mt-10">
                <h2 className=" font-bold tracking-tight">Transection History</h2>                
            </div>

            <div className="pt-5">
                <TransectionUI />
            </div>
        </div>
    )
}

export default Wallet