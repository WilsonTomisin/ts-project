import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { CustomFetch, type ProductsResponse } from '../../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products' ;

export const loader:LoaderFunction = async():Promise<ProductsResponse>=>{
    const response = await CustomFetch<ProductsResponse>(url);
    return response.data ;

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
