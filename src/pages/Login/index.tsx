import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import {CustomFetch} from '@/utils';
import { toast } from '@/hooks/use-toast';
import { type ReduxStore } from '@/store';
import { loginUser } from '@/features/user/userSlice';
import { useAppDispatch } from '@/hooks';
import { AxiosError, AxiosResponse } from 'axios';



export const action = (store:ReduxStore):ActionFunction => {

  /* we are returning a function within a higher order function soo that we would have access to the redux store . */
  return async({request}):Promise<Response|null>=>{
    const formData = await request.formData();
    const parsedFormData = Object.fromEntries(formData)
    try {
      const response = await CustomFetch.post('/auth/local', parsedFormData);
      const username = response.data.user.username;
      const jwt = response.data.jwt ;

      store.dispatch(loginUser({username,jwt}));
      return redirect('/')
    } catch (error) {
      const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'login failed'
      toast({
        title:'an error occured',
        description:`error: ${errorMsg}`
      })
      return null
    }
  }
}


const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const LoginAsGuestUser = async():Promise<void> => {
    try {
      const response:AxiosResponse = await CustomFetch.post('/auth/local', {
          identifier: 'test@test.com',
          password: 'secret'
      })
      const username = response.data.user.username 
      const jwt = response.data.jwt

      dispatch(loginUser({username,jwt}))

      navigate('/')
    } catch (error) {
      toast({description: `an error occured`})
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='POST'>
            <FormInput type='email' labelText='email' name='identifier' />
            <FormInput type='password' name='password' />

            <SubmitBtn text='Login' className='w-full mt-4' />
            <Button
              type='button'
              variant='outline'
              onClick={LoginAsGuestUser}
              className='w-full mt-4'
            >
              Guest User
            </Button>
            <p className='text-center mt-4'>
              Not a member yet?
              <Button type='button' asChild variant='link'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Login
