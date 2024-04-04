import {createContext,useState} from 'react'
export const UserContext = createContext({})
//we create use context to have a global state data to pass to its children,then we export the data,for the children to use
const UserContextParent = ({children })=>{
    //update data in our context
    const[data,setData] = useState('')
    return <UserContext.Provider value={{data,setData}}>{children}</UserContext.Provider>
}
export default UserContextParent