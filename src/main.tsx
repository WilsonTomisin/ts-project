import { Provider } from 'react-redux'
import { store } from './store.ts'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { Toaster } from './components/ui/toaster.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster/>
    <App />
  </Provider>
 
)
