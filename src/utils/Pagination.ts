type ConstructUrlParams = {
    pageNumber: number;
    search: string;
    pathname?: string;
  };
  
  export const constructUrl = ({
    pageNumber,
    search,
    pathname,
  }: ConstructUrlParams): string => {

     //returns the values after the ? in the url i.e; 
     //for example; ?search=chair & category=all & company=all & order=a-z & price=10000 & shipping=on
    let SearchParams = new URLSearchParams(search);


     // we append the page value to the url query parameters soo we can make a request to the for different pages.
     // NB : 'SearchParams' will still return a page query if 'search' values are not provided and the url will look like this
     // https://localhost:5173/products?page=1 . 'SearchParams' will look like this ==> ?page=1
      SearchParams.set('page',pageNumber.toString()) // URL contents are of a type string soo it's important typecast pageNumber to a string. 
    return `${pathname}?${SearchParams.toString()}`
  };
  
  type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname?: string;
  };
  
  export const constructPrevOrNextUrl = ({
    currentPage,
    pageCount,
    search,
    pathname,
  }: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
    
    let prevPage = currentPage - 1;
    if (prevPage < 1) {
        prevPage = pageCount ;
    }
    const prevUrl = constructUrl({pageNumber:prevPage, search, pathname});

    let nextPage = currentPage + 1
    if (nextPage > pageCount) {
      nextPage = 1 ;
    }
    const nextUrl = constructUrl({pageNumber:nextPage, search, pathname});


    return { prevUrl, nextUrl };
  };