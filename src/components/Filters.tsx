import { Form , Link , useLoaderData} from "react-router-dom";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  /*  the 'Form' element from react-router-dom sends a
  GET HTTP reguest by default and returns the value(s) in the URL as query parameters... */




  const {meta, params} = useLoaderData() as ProductsResponseWithParams
  const { search, category, order,price, company, shipping} = params
  // console.log(meta);
  
  return (
  
    <Form
    className=" border rounded-md  px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    items-center"
    >
      {/*  SEARCH */}
      <FormInput type="search" defaultValue={search} name='search' labelText='search product' />

      {/* CATEGORIES */}
      <FormSelect name="category" labelText="select category" defaultValue={category} options={meta.categories}/>

      {/* COMPANIES */}
      <FormSelect labelText='select company' name='company' options={meta.companies}  defaultValue={company}/>

      {/* ORDER BY */}
      <FormSelect labelText='order by' name='order' options={['a-z', 'z-a', 'high', 'low']} defaultValue={order} />

      {/* RANGE */}
      <FormRange labelText="Price" defaultValue={price as string} name="price" />

      {/* SHIPPING */}
      <FormCheckbox label='free shipping' name='shipping' defaultValue={shipping} />


      <Button type="submit"  size={'sm'} className=" self-end mb-2" >
        Submit
      </Button>
      <Button type="button" asChild size={'sm'} className=" self-end mb-2" variant={'outline'}>
          <Link to={'/products'}>Reset</Link>
      </Button>
      
    </Form>
  )
}

export default Filters
