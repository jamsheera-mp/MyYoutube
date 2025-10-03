import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

//
//
const Body = () => {
  return (
    <div className="flex w-full h-[calc(100vh-56px)] overflow-y-auto">
      <div className=" w-96   ">
        <Sidebar />
      </div>
      <div className="flex flex-grow h-[calc(100vh-56px)] overflow-y-auto ">
        <Outlet />
        
        
      </div>
    </div>
  );
};

export default Body;
