

const Button = ({children}) =>{
    return (
        <div>
            <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 whitespace-nowrap">
                {children}
            </button>
        </div>
    )
}
export default Button