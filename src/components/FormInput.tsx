import { Label } from "./ui/label"
import { Input } from "./ui/input"

type FormInputProps = {
    name: string;
    defaultValue?:string;
    type: string;
    labelText: string;
}

function FormInput({name,defaultValue,type,labelText}:FormInputProps) {
  return (
    <div className=" mb-2">
        <Label htmlFor={name} className=" capitalize ">{ labelText || name}</Label>
        <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  )
}

export default FormInput