import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../context/useContext.jsx'
import {Outlet,Navigate} from 'react-router-dom'
const Auth = ()=>{
    const {data,setData} = useContext(UserContext) //get the data from usecontext,outlet is child of auth,we use auth to wrap route that we want it to be protected ie users cant visit those route without being authenticated
    let [loading, setLoading] = useState(true)//use loading state to wait 
    console.log('userdata',data?.data?.name)//because we have updated our data in login,we can use the data details here
    useEffect(()=>{
        let token = localStorage.getItem('token') //get token from our userdata that we saved to local storage
        console.log('token from backend',token)
        if(token) {
            setData('cletsy media') //we check if theres token and then update the setdata with their details and keep them logged in
            console.log('data after loggin',data)
            setLoading(false)
            return 
        }
        setData('')
        setLoading(false)
    },[])
    return(
        <>
        {loading ? 
        null
        : data ?  
        <Outlet/> 
        : 
        <Navigate to='/login'/>
        }
         
        </>
       
    )
}
export default Auth;
//we checked if we have data ie our user details then our user can navigate to outlet which is the auth children that is protected else redirect them to login