import { useLoaderData } from 'react-router-dom';
import Productsgrid from './Productsgrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { ProductsResponse } from '@/utils';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const ProductsContainer = () => {
  const { meta} = useLoaderData() as ProductsResponse
  const totalAmouts = meta.pagination.total
  const [layout,setLayout] = useState< 'grid' | 'column'>('grid')
  return (
    <>

      <section>
        <div className=' flex justify-between items-center mt-8'>
          <h1 className=' font-medium text-md'>
            {totalAmouts} Product{totalAmouts >1 && 's'}
          </h1>
          <div className=' flex gap-x-4'>
            <Button onClick={()=> setLayout('grid')} size={'icon'} variant={ layout === 'grid' ? 'default' : 'ghost'}>
              <LayoutGrid/>
            </Button>
            <Button onClick={()=> setLayout('column')} size={'icon'} variant={layout === 'column' ? 'default' : 'ghost'}>
              <List/>
            </Button>
          </div>
        </div>
      </section>
      <Separator className=' mt-4'/>
      <div>
        {
          totalAmouts == 0 ? <h1 className=' font-semibold text-2xl mt-5'>Sorry no item was found...</h1>
           : layout === 'grid'  
           ? <Productsgrid/>
           : <ProductsList/>
        }
      </div>
    </>
  )
}

export default ProductsContainer
