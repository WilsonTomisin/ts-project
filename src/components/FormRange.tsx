import { formatAsDollars } from '@/utils';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from './ui/slider';



interface FormRangeProps{
    name:string;
    labelText: string;
    defaultValue: string ;
}

export default function FormRange({name,defaultValue,labelText}:FormRangeProps) {
    const step = 1000 // it's in cents
    const max = 100000
    const defaultPrice = defaultValue ? Number(defaultValue) : max

    const [ selectedPrice , setSelectedPrice] = useState(defaultPrice)
  return (
    <div className=' mb-2'>
        <Label htmlFor={name} className=' flex justify-between capitalize'>
            { labelText || name}
            <span>{ formatAsDollars(selectedPrice)}</span>
        </Label>
        <Slider 
        id={name}
        name={name}
        step={step}
        max={max}
        value={[selectedPrice]}
        onValueChange={(value)=> setSelectedPrice(value[0])}
        className=' mt-4'
        />
      
    </div>
  )
}
