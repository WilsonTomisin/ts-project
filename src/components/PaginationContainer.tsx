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
  

  // 'page' returns the number of the page being viewed currently that is; is it the first page or second page?
  // 'page count' returns the total number of page that is available for an API call for example, if the API call returned a list of products,
  // ..a page can only have up to 10 items , the next 10 will be on page 2. the total number of page available for a request
  //is the 'PageCount'


  
 // creates an array of page numbers using the pageCount attribute from the REST API as the length of the array
 // in this case the pageCount == 3.
  const pages = Array.from( { length: pageCount}, (_,idx)=> idx + 1)  // returns [1,2,3]
  
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
