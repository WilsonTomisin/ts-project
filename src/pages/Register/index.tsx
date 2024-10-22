import { ActionFunction, Form, Link, redirect } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import { CustomFetch } from '@/utils';
import { toast } from '@/hooks/use-toast'
import { AxiosError } from 'axios';

export const action:ActionFunction =  async({request}):Promise< Response | null>=>{
    // console.log(request)
    const formData = await request.formData();
    // console.log(formData);
    
    const parsedFormData = Object.fromEntries(formData) // returns an object { username:the value entered, email:something, password:thepassword}
  
    try{
      await CustomFetch.post('/auth/local/register', parsedFormData) 
 
      toast({ description:'login successful!'});
      return redirect('/login')
      
    }catch (error){
      const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'registration failed .' ;
      toast({
        description: ` error: ${errorMsg}`
      })

      return null ;
    }
    // return null
}

const Register = () => {
  return (
    <section className=' h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post' > {/* the method is specified here because we are making use of the react router dom 'ACTION FUNCTION' */}
            <FormInput type='text' name='username' />
            <FormInput type='email' name='email'  />
            <FormInput type='password' name='password' defaultValue='secret' />
            <SubmitBtn text='register' className='w-full mt-4' />
  
            <p className='text-center mt-4'>
              Already a member?
              <Button type='button' asChild variant='link'>
                <Link to='/login'>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Register
