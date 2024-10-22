import {HomeLayout,Landing,Error,ErrorElement,Products,SingleProduct,Cart,About,Register,Login, Checkout, Orders,} from './pages';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


// Loaders
import { loader as LandingLoader } from './pages/Landing';
import { loader as ProductsLoader} from './pages/Products';
import { loader as SingleProductLoader } from './pages/SingleProduct';

// Actions
import { action as RegisterUser } from './pages/Register';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {index:true, element:<Landing/>, loader: LandingLoader},
      { path:"products", element:<Products/>,errorElement:<ErrorElement/>, loader: ProductsLoader },
      { path:"products/:id", element:<SingleProduct/>,errorElement:<ErrorElement/>, loader: SingleProductLoader },
      { path:"cart",element:<Cart/> ,errorElement:<ErrorElement/> },
      { path:"about", element:<About/> ,errorElement:<ErrorElement/> },
      { path:"checkout", element:<Checkout/> ,errorElement:<ErrorElement/> },
      {path:"orders", element:<Orders/>, errorElement:<ErrorElement/> }
    ]
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>
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
