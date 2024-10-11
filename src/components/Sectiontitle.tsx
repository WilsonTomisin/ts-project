import { Separator } from "./ui/separator"
const Sectiontitle = ({text}: {text:string}) => {
  return (
    <div>
      <h1 className=" text-3xl capitalize mb-8 tracking-wider font-medium">{text}</h1>
      <Separator/>
    </div>
  )
}

export default Sectiontitle
