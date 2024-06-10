
import '@/app/_components/auth/auth.module.css'

export default function Layout({ children }) {
  return ( 
    <main className='bg-gray-100 flex flex-row sm:min-h-screen justify-center items-center'>
      {children}
    </main> 
  )
}
