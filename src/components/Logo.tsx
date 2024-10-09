import { FlameKindling } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'} className=' bg-destructive p-2 rounded-lg text-white hidden lg:flex justify-center items-center'>
      <FlameKindling className=' w-8 h-8'/>
    </Link>
  )
}

export default Logo
