


import Head from './components/Head'
import Body from './components/Body'

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
<div className='fixed top-0 left-0 right-0 z-50'>
 <Head/>
</div>
   
    <div className='flex flex-grow pt-14'>
        <Body/>
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