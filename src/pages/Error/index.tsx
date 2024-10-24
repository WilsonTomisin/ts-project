import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { WifiOff } from "lucide-react";
const Error = () => {
  const error = useRouteError();
  const isError = isRouteErrorResponse(error)
  console.log(error);
  if (isRouteErrorResponse(error) && error.status == 404) {
    return(
        <div className=" grid place-items-center min-h-[100vh]">
          <div className=" text-center">
            <p className=" text-primary text-9xl font-semibold">404</p>
            <h2 className="  font-bold mt-4 tracking-tight text-3xl sm:text-5xl">Page Not Found</h2>
            <p className=" mt-6 leading-7 text-lg">
              Sorry we could not find the page you're lookin for.
            </p>
            <div className=" mt-10">
              <Button asChild variant={'secondary'} size={'lg'}>
                <Link to={'/'}>
                  Go back home.
                </Link>
              </Button>
            </div>
          </div>
        </div>
    )
  } else if (isRouteErrorResponse(error) && error.status == 0 ) {
    return(
        <div className=" grid place-items-center min-h-[100vh]">
          <div className=" text-center">
            <p className=" text-primary text-9xl font-semibold"> <WifiOff/> </p>
            <h2 className="  font-bold mt-4 tracking-tight text-3xl sm:text-5xl">No Internet Connection</h2>
            <p className=" mt-6 leading-7 text-lg">
              connect to the  Internet then try again
            </p>
            {/* <div className=" mt-10">
              <Button asChild variant={'secondary'} size={'lg'}>
                <Link to={'/'}>
                  Go back home.
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
    )
  }
    
  return (
    <div className=" grid place-items-center min-h-[100vh]">
        <div className=" text-center">
          <p className=" text-primary text-9xl font-semibold">{isError ? error.status : ''}</p>
          <h2 className="  font-bold mt-4 tracking-tight text-3xl sm:text-5xl">An error occured</h2>
          <p className=" mt-6 leading-7 text-lg">
            Something unexpected happened.
          </p>
          <div className=" mt-10">
           <h1 className=" text-primary font-light"> reload page.. </h1>
            {/* <Button asChild variant={'secondary'} size={'lg'}>
              <Link to={'/'}>
                Go back home.
              </Link>
            </Button> */}
          </div>
        </div>
    </div>
  )
}

export default Error
