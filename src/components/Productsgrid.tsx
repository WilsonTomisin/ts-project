import {Link, useLoaderData } from "react-router-dom";
import { formatAsDollars ,ProductsResponse} from "@/utils";
import { Card, CardContent } from "./ui/card";

const Productsgrid = () => {
  const { data} = useLoaderData() as ProductsResponse
  return (
    <div className=" pt-12 grid gap-4  md:grid-col-2 lg:grid-cols-3">
      {data.map((product)=>{
        const { title, price,image } = product.attributes
        const priceInDollars = formatAsDollars(price);

        return(
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className=" p-4">
                <img src={image} alt={title} className=" rounded-md h-64 md:h-48 w-full object-cover"/>
                <div className=" mt-4 text-center">
                    <h2 className=" text-xl font-semibold capitalize">{title}</h2>
                    <p className=" mt-2 font-light text-primary">
                      {priceInDollars}
                    </p>
                </div>
              </CardContent>
            </Card>

          </Link>
        )
      })}
    </div>
  )
}

export default Productsgrid
