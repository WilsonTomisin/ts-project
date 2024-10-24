import {HomeLayout,Landing,Error,ErrorElement,Products,SingleProduct,Cart,About,Register,Login, Checkout, Orders,} from './pages';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { store } from './store';


// Loaders
import { loader as LandingLoader } from './pages/Landing';
import { loader as ProductsLoader} from './pages/Products';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as OrderLoader} from './pages/Orders'

// Actions
import { action as RegisterUser } from './pages/Register';
import { action as LoginUser } from './pages/Login';
import { action as checkOutAction } from './components/CheckOutForm';



const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      { index:true, element:<Landing/>, loader: LandingLoader},
      { path:"products", element:<Products/>,errorElement:<ErrorElement/>, loader: ProductsLoader },
      { path:"products/:id", element:<SingleProduct/>,errorElement:<ErrorElement/>, loader: SingleProductLoader },
      { path:"cart",element:<Cart/> ,errorElement:<ErrorElement/> },
      { path:"about", element:<About/> ,errorElement:<ErrorElement/> },
      { path:"checkout", element:<Checkout/> ,errorElement:<ErrorElement/>, loader: CheckoutLoader(store), action:checkOutAction(store)  }, // see checkout route for more detail on the loader function.
      { path:"orders", element:<Orders/>, errorElement:<ErrorElement/> , loader: OrderLoader(store) }
    ]
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>,
    action: LoginUser(store)   /* we pass the store because we need to access the dispatch function in the action function
                                beacuse action functions cannot call hooks. */
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
    action: RegisterUser
  },
])

function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
