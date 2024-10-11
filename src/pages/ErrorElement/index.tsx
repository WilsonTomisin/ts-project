import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError();
  return ( 
    <div className=" text-center">
        <p className=" text-primary text-9xl font-semibold"></p>
        <h2 className="  font-bold mt-4 tracking-tight text-3xl sm:text-5xl">An error occured</h2>
        <p className=" mt-6 leading-7 text-lg">
        Something unexpected happened.
        </p>
        
    </div>
   )
}

export default ErrorElement
