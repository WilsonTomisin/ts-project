import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {
  const[ isDisabled, setIsDisabled] = useState(true)
  return (
    <div>
      <h1 className=' text-2xl font-bold'>Hello world</h1>
      <Button variant={'link'} size={'lg'} onClick={()=>alert('clicked button!')} >
        click me!
      </Button>
      <button  disabled={isDisabled} onClick={()=>alert('clicked second button!')} >
        test btn
      </button>
    </div>
  )
}
export default App
