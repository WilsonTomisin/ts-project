import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Checkbox } from "./ui/checkbox"
import { Select } from "./ui/select";
import { Slider } from "./ui/slider";
import { Form , Link } from "react-router-dom";
import { Button } from "./ui/button";

const Filters = () => {
  return (
    <Form
    className=" border rounded-md  px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    items-center"
    >
      <div className=" mb-2">
          <Label htmlFor="search">Search Product</Label>
          <Input id="search" name="search" type="text" defaultValue={''} />
      </div>
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
