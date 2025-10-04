import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../redux/appSlice"
import { useSearchParams} from "react-router"

const WatchPage = () =>{

    const [searchParams] = useSearchParams()
    console.log(searchParams);
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    return (
        <div>
            
        </div>
    )
}

export default WatchPage