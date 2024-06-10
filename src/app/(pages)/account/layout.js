
import SidebarUI from '@/app/_components/account/SidebarUI'
import '@/app/_components/auth/auth.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className=" px-5  bg-white  sm:px-60 ">
      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0" >
        <div className='hidden space-y-6 pb-16 md:block '>
          <SidebarUI />
          <div>
            this is buttos
          </div>
        </div>
        <div className='block md:hidden '>


          <section class="flex flex-col md:flex-row">
            <div class="flex-1 ">
              <div class="flex flex-wrap justify-center">
                <Link href={'/account'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2" >Profile</Link>            
                <Link href={'/account/orders'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-1" >My Orders</Link>            
                <Link href={'/account/address'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-1" >My Address</Link>            
                <Link href={'/account/wallet'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-1 " >Wallet</Link>
                <Link href={'/account/return'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-1 " >Returns</Link>
                <Link href={'/account/settings'} className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-1 " >Account Setting</Link>

                {/* <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-github mr-1"></i> Github</button>
                <button class="bg-blue-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-facebook mr-1"></i> Facebook</button>
                <button class="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-youtube mr-1"></i> Youtube</button>
                <button class="bg-red-500 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-laravel mr-1"></i> Laravel</button>
                <button class="bg-green-200 text-green-800 rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-vuejs mr-1"></i> VueJS</button> */}
              </div>
            </div>
       
          </section>
        </div>

        <div className="flex-1 lg:max-w-2xl">
          {children}
        </div>
      </div>
    </div>




  )
}
