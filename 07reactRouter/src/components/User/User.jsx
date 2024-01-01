
import { useParams } from "react-router-dom"
const User = () => {
    const {id} = useParams();
  return (
    <div className="bg-gray-600 text-3xl text-white p-3">User :{id} </div>
  )
}

export default User