import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  ProductsResponseWithParams,
  constructUrl,
  constructPrevOrNextUrl,
} from '@/utils';

import { useLoaderData, useLocation } from 'react-router-dom';


const PaginationContainer = () => {
  const { meta :{ pagination:{ page, pageCount}}} = useLoaderData() as ProductsResponseWithParams
  const { pathname ,search} = useLocation()
  
  
  const pages = Array.from( { length: pageCount}, (_,idx)=> idx + 1)
  console.log(pages);
  
  
  return (
    <div>
      
    </div>
  )
}

export default PaginationContainer
