
import SidebarUI from '@/app/_components/account/SidebarUI'
import '@/app/_components/auth/auth.module.css'

export default function Layout({ children }) {
  return (
    <div className=" px-5  bg-white  sm:px-60 ">
      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0" >
        <div className='hidden space-y-6 pb-16 md:block '>
          <SidebarUI />
        </div>
        
        <div className="flex-1 lg:max-w-2xl">
          {children}
        </div>
      </div>
    </div>




  )
}
