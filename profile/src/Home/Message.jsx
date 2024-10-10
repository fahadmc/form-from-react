import { useContext } from "react"
import { UserContext } from "../../App"


const Message = () => {
  const user =useContext(UserContext)
  
  return (
    <div>{user}</div>
  )
}

export default Message