import { useLoaderData } from 'react-router-dom';
import { Link, type LoaderFunction } from 'react-router-dom';
import { CustomFetch,formatAsDollars,type SingleProductResponse,} from '@/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SelectProductColor, SelectProductAmount } from '@/components';
import { Mode } from '@/components/SelectProductAmount';
import { useToast } from '@/hooks/use-toast';



export const loader:LoaderFunction = async({params}):Promise<SingleProductResponse>=>{
  const { data} = await CustomFetch<SingleProductResponse>(`/products/${params.id}`)
  return data

}


const SingleProduct = () => {
  const { data:Products } = useLoaderData() as SingleProductResponse ;
  const { price,description,colors, company,title,image } = Products.attributes

  const priceInDollars = formatAsDollars(price)
  const [ productColor, setProductColor] = useState(colors[0])
  const [ productAmount, setProductAmount] = useState(1)

  const { toast } = useToast()
  return (
    <section>
      <div className='flex gap-x-2 h-6 items-center'>
        <Button asChild variant='link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button asChild variant='link' size='sm'>
          <Link to='/products'>Products</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {priceInDollars}
          </p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
              <SelectProductColor colors={colors} productColor={productColor} setProductColor={setProductColor}/>
          {/* AMOUNT */}
              <SelectProductAmount mode={Mode.SingleProduct} amount={productAmount} setAmount={setProductAmount}/>
          {/* CART BUTTON */}
          <Button size='lg' className='mt-10' onClick={()=>null}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
