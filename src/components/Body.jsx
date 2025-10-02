import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () =>{
    return (
        <div className='flex w-full'>
            <div className='w-60  border-gray-200 h-[calc(100vh-56px)] overflow-y-auto'>
 <Sidebar/>
            </div>
           <div className='flex flex-grow h-[calc(100vh-56px)] overflow-y-auto'>
            <MainContainer/>
           </div>
           
        </div>
    )
}

export default Body