import { useNavigation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';


const SubmitBtn = ({ text, className}:{ text:string;  className: string; }) => {
    const navigate = useNavigation()
    const isSubmitting = navigate.state === 'submitting' ;

    return(
        <>
        <Button type='submit' className={className} disabled={isSubmitting}>
            {isSubmitting ?
             <span className=' flex items-center'>
                <ReloadIcon className=' mr-2 h-4 w-4 animate-spin'/>
                submitting...
            </span> : text}
            
        </Button>
        </>
    )
}
export default SubmitBtn