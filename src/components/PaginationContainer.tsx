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
  
  
 // creates an array of page numbers using the pageCount attribute from the REST API as the length of the array
 // in this case the pageCount == 3.
  const pages = Array.from( { length: pageCount}, (_,idx)=> idx + 1) 
  
  // if the pageCount is less than 2 , the pagination component does not render
  //e.g in cases where the results from a search query is 0 the pageCount attribute would be set to 0. we would'nt want to render the pagination then 
  if (pageCount < 2) {
    return null
  };

  const renderPagination = pages.map((pageNumber, idx)=>{
    const isActive = pageNumber == page
    const url = constructUrl({pathname,pageNumber,search})
    
    return(
      <PaginationItem key={idx}>
        <PaginationLink to={url} isActive={isActive}>
            {pageNumber}
        </PaginationLink>
      </PaginationItem>
    )
    })
  
    const { nextUrl, prevUrl} = constructPrevOrNextUrl({
      currentPage: page,
      search,
      pageCount,
      pathname
    })
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl}/>
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl}/>
        </PaginationItem>
      </PaginationContent>     
    </Pagination>
  )
}

export default PaginationContainer
