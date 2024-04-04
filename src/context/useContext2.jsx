import {createContext,useState} from 'react'
export const userContext = createContext({})
const UserContextParent = ({children})=>{
    const [data,setData] = useState('dave')
    //for passing down props  
    return <userContext.Provider value={{data,setData}}>{children}</userContext.Provider>
}
export default UserContextParent 