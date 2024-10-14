import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

type FormSelectProps ={
    name:string;
    labelText?: string;
    options: string [];
    defaultValue? : string;
}

const FormSelect = ({name,defaultValue,options,labelText}:FormSelectProps ) => {
  return (
    <div className=' mb-2'>
        <Label htmlFor={name} className='capitalize'>
            {labelText || name}
        </Label>
        <Select defaultValue={defaultValue || options[0]} name={name}>
            <SelectTrigger id={name} className="">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option, idx)=>{
                        return(
                            <SelectItem value={option} key={idx}>
                                {option}
                            </SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
  )
}
export default FormSelect


