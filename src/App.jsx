
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Support from './Support';
import Store from './Store';

function App() {

  let x = createBrowserRouter([
    {path:'/',element:(<main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
     </main>)},
    {path:'support',element:<Support />},
    {path:'store',element:<Store />},
  ])
  return (
    <>
    <RouterProvider router={x}>

     
    </RouterProvider>
 
    </>
  )
}

export default App
