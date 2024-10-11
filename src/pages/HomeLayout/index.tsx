import { Navbar } from "@/components"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className=" align-element">
        <Outlet/>
      </div>
      {/* <footer>footer</footer> */}
    </div>
  )
}

export default HomeLayout
