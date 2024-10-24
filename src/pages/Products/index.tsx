import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { CustomFetch, type ProductsResponse, type ProductsResponseWithParams } from '../../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader:LoaderFunction = async({request}):Promise<ProductsResponseWithParams>=>{

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ]); // converts an array into objects...
    const response = await CustomFetch<ProductsResponse>(url,{ params });   // url contains query params

    // the reason we are accessing the URL params and converting them into an object is soo..
    //..that we can populate the form fields with  default values respective to them .
    // check the filter component to see how we use it.
    let newResponse ={ ...response.data, params}
    console.log(newResponse); // returns an object { data:[] of objects, meta:{} , params:{}  }
    
    return newResponse 

}

const Products = () => {
  return (
    <div>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default Products
