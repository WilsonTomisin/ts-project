import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { CustomFetch, type ProductsResponse, type ProductsResponseWithParams } from '../../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader:LoaderFunction = async({request}):Promise<ProductsResponseWithParams>=>{

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ]);
    const response = await CustomFetch<ProductsResponse>(url,{ params });   
    return {...response.data, params} ;

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
