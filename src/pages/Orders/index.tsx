import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { CustomFetch, OrdersResponse } from '@/utils';
import {
  OrderList,
  ComplexPagination,
  Sectiontitle,
} from '@/components';
import { toast } from '@/hooks/use-toast';
import { ReduxStore } from '@/store';


//  we are accessing the store in the loader function because we want to ensure that there must be user logged in 
// any time we want to access this route.
// NB: even though we ensure these routes i.e; checkout & orders are not displayed when a user is not logged in, 
// the routes can still be accessed by typing in the url, to prevent this ,the 'loader' function ensures that anytime
// we route to this page, it checks if there's a user in the store and if no user, we display a toast error message telling
// them to login.

export const loader =(store:ReduxStore):LoaderFunction=>{

  return async({request}):Promise<OrdersResponse | Response | null>=>{
      const user = store.getState().userState.user ;

      if (!user) {
        toast({description:'please login first.'})
        return redirect('/login');
      }

      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
      ]); 

      try {
        const response = await CustomFetch<OrdersResponse>('/orders',{
          params,
          headers:{
            Authorization: ` Bearer ${user.jwt}`
          }
        })
        return { ...response.data}
        
      } catch (error) {
        return null 

      }
  }
}

const Orders = () => {
  const { meta } = useLoaderData() as OrdersResponse ;

  if (meta.pagination.total < 1) {
    return <Sectiontitle text=' You have no orders'/>
  }
  return (
    <>
      <Sectiontitle text='Order list'/>
      <OrderList/>
      <ComplexPagination/>
    </>
  )
}

export default Orders
