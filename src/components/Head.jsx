

import { Menu, Search, Bell, User } from "lucide-react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../redux/appSlice"


const Head = () =>{
     
    const dispatch = useDispatch()

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    return (
        <header className="flex items-center justify-between p-3 shadow-md bg-white">

            {/* Left Section - Menu + Logo  */}
            <div className="flex items-center space-x-3 ">
                
                <Menu className="h-6 w-6 cursor-pointer text-gray-700" onClick={toggleMenuHandler}/>
                <img
                className="h-6 cursor-pointer"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png"
                 alt="youtube logo"/>
            </div>

            {/* Middle Section - Search Bar */}
            <div className="hidden sm:flex flex-grow justify-center">
            <div className="flex items-center w-full max-w-md  border border-gray-300 rounded-2xl overflow-hidden">

                <input
                className="flex-grow px-4 py-2 outline-none text-sm"
                placeholder="Search"
                 type="text" />
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                    <Search className="h-5 w-5 text-gray-700"/>
                     
                </button>
            </div>
            </div>

            { /*  Right Section - Icons */}
            <div className="flex items-center space-x-4">
                {/* Show search icon only on mobile */}
                <div className="sm:hidden">
                    <Search className="h-6 w-6 cursor-pointer text-gray-700"/>
                </div>
                <Bell className="h-6 w-6 cursor-pointer text-gray-700"/>
                <User className="h-6 w-6 cursor-pointer text-gray-700"/>

            </div>
           
        </header>
    )
}
export default Head