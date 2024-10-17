import { Hero, FeaturedProducts } from "@/components";
import { ProductsResponse , CustomFetch } from "@/utils";
import { LoaderFunction } from 'react-router-dom'

const urlSuffix = '/products?featured=true'
export const loader:LoaderFunction = async():Promise<ProductsResponse>=>{
  const response = await CustomFetch<ProductsResponse>(urlSuffix) 
  return response.data
}
const Landing = () => {
  // const featuredProductsData = useLoaderData() as ProductsResponse

  // NB: children components can use the loader data from their parent component. e.g the featuredProducts component
  // has a productsGrid component that uses the loaderdata in this component to render products...   
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default Landing
