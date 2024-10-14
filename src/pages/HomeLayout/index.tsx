import { Navbar,Loading,Header } from "@/components"
import { Outlet, useNavigation } from "react-router-dom"


const HomeLayout = () => {
  const navigation = useNavigation();
  const pageLoading = navigation.state === 'loading';
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className=" align-element py-20">
        { pageLoading ? <Loading/> :<Outlet/> }
      </div>
      {/* <footer>footer</footer> */}
    </div>
  )
}

export default HomeLayout
