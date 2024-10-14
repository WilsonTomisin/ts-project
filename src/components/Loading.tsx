import { Skeleton } from "./ui/skeleton"
function Loading() {
  return (
    <div className=" pt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
            [1,2,3].map((_, idx)=>{
                return(
                    <div key={idx} className='flex flex-col space-y-3'>
                        <Skeleton className='h-[205px] w-full rounded-xl' />
                        <div className='space-y-2'>
                            <Skeleton className='h-4 mx-auto w-[250px]' />
                            <Skeleton className='h-4 mx-auto w-[200px]' />
                        </div>
                  </div>
                )
            })
        }
      
    </div>
  )
}

export default Loading
