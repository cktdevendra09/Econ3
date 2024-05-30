import HeaderNavbar from "../_components/header/HeaderNavbar";

export default function Layout({ children }) {
  return (
    <div className=" bg-white min-h-screen">
      <HeaderNavbar />
      { children }    
    </div>

  )
}
