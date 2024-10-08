import { Button } from "./components/ui/button";
import { useState } from "react";
import { useAppSelector } from "./hooks";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

function App() {
  const { name} = useAppSelector((state)=> state.userState )
  const[ isDisabled, setIsDisabled] = useState(true)
  return (
    <div>
      <h1 className=' text-2xl font-bold'>Hello world</h1>
      <Button variant={'link'} size={'lg'} onClick={()=>alert('clicked button!')} >
        click me!
      </Button>
      <button  disabled={isDisabled} onClick={()=>alert('clicked second button!')} >
        {name}
      </button>
      <Orders/>
    </div>
  )
}
export default App
