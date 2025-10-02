import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"


const MainContainer = () =>{
    return (
        <div className="flex items-center justify-between">
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer