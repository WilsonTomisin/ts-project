type ConstructUrlParams = {
    pageNumber: number;
    search: string;
    pathname: string;
  };
  
  export const constructUrl = ({
    pageNumber,
    search,
    pathname,
  }: ConstructUrlParams) => {
    let newvar = pageNumber
    return `/products`;
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
    let oldvar = search
    const prevUrl = '/products';
    const nextUrl = '/products';
    return { prevUrl, nextUrl };
  };