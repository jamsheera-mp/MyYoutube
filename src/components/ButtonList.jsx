import Button from "./Button"

const list = ["All","Live","Music","Gaming","Cricket","Podcast","News","Coding","TED","Thoughts","AI","Movies","Watched","New to you"]
const ButtonList = () =>{
    return (
        <div className="flex space-x-1 overflow-x-auto no-scrollbar p-2">
            {list.map((item,index)=> (
                <Button key={index}>{item}</Button>
            ))}
        </div>
    )
}

export default ButtonList