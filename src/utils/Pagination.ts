type ConstructUrlParams = {
    pageNumber: number;
    search: string;
    pathname: string;
  };
  
  export const constructUrl = ({
    pageNumber,
    search,
    pathname,
  }: ConstructUrlParams): string => {
    let SearchParams = new URLSearchParams(search)
    SearchParams.set('page',pageNumber.toString())
    return ` ${pathname}?${SearchParams.toString()}`
  };
  
  type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname: string;
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