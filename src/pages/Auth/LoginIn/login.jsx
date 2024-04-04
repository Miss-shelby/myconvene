import styles from "./login.module.css";
import Button from "../../../components/Buttons/index";
import Input from "../../../components/Inputs/index";
import Icon from "../../../components/icons/index";
import Img1 from "../../../assets/images/facebook-icon.png";
import Img2 from "../../../assets/images/google.png";
import Img3 from "../../../assets/images/twitter.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Backend } from "../../../EndPoint";
import{ UserContext} from '../../../context/useContext.jsx'
import  UserContextParent from '../../../context/useContext.jsx'
import {useContext} from 'react'
const Login = () => {
const {setData} = useContext(UserContext) //get the setdata value from usecontext
const navigate = useNavigate() //initiliaze navigate
const [users,setUsers] = useState({}) //set users to state
const [showResponse,changeShowResponse] = useState(false)
//1. onsubmit handler to get our input values and call our api function
//2. we use axios to post our data to the backend end point 
  const onSubmitHandler = (inputValues)=>{
    changeShowResponse(false)
    axios.post(`${Backend}/users/login`, {
      fullname: inputValues.fullname,
      email: inputValues.email,
      password:inputValues.password
    })
    .then(function (response) {
      // setUsers(response) //3.update our user with response from the api which we later replace with setdata from usecontext
      const token = response.data.data.token //store our token from response to local storage
      console.log(response.data,'userdata from login')
      localStorage.setItem('token',token)

      if(response?.data?.status > 0 ){ //check if the response data is succesful
        setData(response.data.data)  //update the setdata from our usecontext with the data from the response
        navigate('/meetUp') //to naviagte the user to meetup page if they succesfully login
      }else{
      setUsers(response.data.message)
      }
     
      console.log(response);
    })
    //4.catch error if the user is sending in wrong details
    .catch(function (error) {
      setUsers(error.response)
      console.log(error);
    })
    .finally(function(){
      changeShowResponse(true)
      setTimeout(()=>{
        changeShowResponse(false)
    }, 5000)
    })
    // console.log(inputValues)


  }
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
      <h2>Convene</h2>
      <h1 className={styles.header}>Welcome back</h1>
      <Formik onSubmit={onSubmitHandler}
       initialValues={{email: "", password: ""}} >
        {({
            values,
            handleChange
        }) => {
          return (
            <Form >
              <div className={styles.input_wrapper}>
                <Input value={values?.email}  onChange={handleChange} variant="secondary" name="email" type="email" />
              </div>
              <Input value={values?.password}   onChange={handleChange} variant="primary" name="password" type="password" />
              {/* 5. if our show response is true then if our user didnt login succesfully,we return error 
              msg else we return sucess msg */}
              {
                showResponse&&(
                  <div>
                    {users?.data?.status == -1?
                    (<p className={styles.error}>{users?.data?.message}</p>)
                    : (<p className={styles.sucess}>{users?.data?.message}</p>)}
                    </div>
                    )}
              
              <div className={styles.button_wrapper}>
                <Button type='submit' variant="primary" size="large">
                <Link to="">SIGN IN </Link>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <p className={styles.account}>
        Don’t have an account?{" "}
        <Link to="/signup">
          {" "}
          <span>Sign UP Now</span>
        </Link>
      </p>
      <hr className={styles.line} />
      <p className={styles.account}>Continue with social media</p>
      <div className={styles.icon_images}>
        <Icon img={Img1} variant="primary"></Icon>
        <Icon img={Img2} variant="secondary">
          {" "}
        </Icon>
        <Icon img={Img3} variant="primary">
          {" "}
        </Icon>
      </div>
    </div>
    </div>
  );
};
export default Login;
