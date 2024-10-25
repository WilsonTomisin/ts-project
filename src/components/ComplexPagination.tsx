import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
  } from '@/components/ui/pagination';
  import {
    constructUrl,
    constructPrevOrNextUrl,
    type OrdersResponse,
  } from '@/utils';
import React from 'react';
  
  import { useLoaderData, useLocation } from 'react-router-dom';

const ComplexPagination = () => {
    const {meta} = useLoaderData() as OrdersResponse;
    const { page,pageCount }= meta.pagination ;
    const { pathname ,search} = useLocation();

    if (pageCount < 2) {
        return null;
    }


    const constructButton = ({pageNumber, isActive}:{pageNumber: number; isActive:boolean ;}):React.ReactNode=>{
        const url = constructUrl({pathname,pageNumber,search})
        return(
            <PaginationItem key={pageNumber}>
                <PaginationLink to={url} isActive={isActive}>
                    {pageNumber}
                </PaginationLink>
            </PaginationItem>
        )

    }

    const constructEllipsis = ( key:string):React.ReactNode=>{
        return(
            <PaginationItem key={key}>
                <PaginationEllipsis/>
            </PaginationItem>
        )
    }

    const renderPagination =()=>{
        let pages:React.ReactNode[] = [] ;
        // first page button
        pages.push( constructButton({pageNumber: 1, isActive: page === 1}))
        
        //ellipsis  for previous
        if (page > 2 ) {
            pages.push(constructEllipsis('previous-dots'))
        }

        //active page
        if (page !== 1 && page !== pageCount) {
            pages.push( constructButton({ pageNumber: page , isActive: true}))
        }
        if (page < pageCount - 1) {
            // if the page you are on is less than the total number of pages available's previous number...
            pages.push(constructEllipsis('next-dots'))
        }
        // last page button
        pages.push(constructButton({pageNumber: pageCount , isActive:page===pageCount}))
        return pages;
    }
      
    const { nextUrl, prevUrl} = constructPrevOrNextUrl({
        currentPage: page,
        search,
        pageCount,
        pathname
    })
      return (
        <Pagination className=' mt-11'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious to={prevUrl}/>
            </PaginationItem>
            {renderPagination()}
            <PaginationItem>
              <PaginationNext to={nextUrl}/>
            </PaginationItem>
          </PaginationContent>     
        </Pagination>
    )
}

export default ComplexPagination
