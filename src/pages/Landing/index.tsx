import { Hero, FeaturedProducts } from "@/components";
import { ProductsResponse , CustomFetch } from "@/utils";
import { LoaderFunction } from 'react-router-dom'

const urlSuffix = '/products?featured=true'
export const loader:LoaderFunction = async():Promise<ProductsResponse>=>{
  const response = await CustomFetch<ProductsResponse>(urlSuffix) ;
  return response.data
}
const Landing = () => {
  // const featuredProductsData = useLoaderData() as ProductsResponse
  // console.log(featuredProductsData);
  
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      {/* <h1 className=" text-4xl font-bold text-primary">Landing page</h1> */}
    </div>
  )
}

export default Landing
