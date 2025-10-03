
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Head from './components/Head'
import Body from './components/Body'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}])
const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Head />
      </div>
      <div className='flex flex-grow pt-14'>
      <RouterProvider router={appRouter} />
      
        
      </div>



      {
        /**
         * Head
         * Body
         * Sidebar
         *    MenuItems
         * MainContainer
         *   ButtonList
         *   VideoContainer
         *   VideoCard
         * 
         */
      }
    </div>
  )
}

export default App