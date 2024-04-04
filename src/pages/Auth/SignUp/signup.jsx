import React,{useState} from'react'
import axios from 'axios'
import { Backend } from '../../../EndPoint'
import styles from "./signup.module.css"
import Button from "../../../components/Buttons/index"
import Input from "../../../components/Inputs/index";
import Icon from "../../../components/icons";
import Img1 from "../../../assets/images/facebook-icon.png";
import Img2 from "../../../assets/images/google.png";
import Img3 from "../../../assets/images/twitter.png";
import { Formik,Form } from 'formik';
import {Navigate, Link,useNavigate } from "react-router-dom";

const SignUp = ()=>{
    const [user,setUser] = useState({})
    const [showResponse,changeShowResponse] = useState(false)
const onSubmitHandler = (inputValues)=>{
    changeShowResponse(false)
    //we use post methods to send our users to backend and pass in the values of our input field
    axios.post(`${Backend}/users`, {
            name: inputValues.fullname,
            email: inputValues.email,
            password:inputValues.password
          })
          .then(function (response) {
            setUser(response) //get the response and use it to update the usser state
            console.log(response);
          })
          .catch(function (error) {
            setUser(error.response) //get the error response and use it update the state too
            console.log(error.response); 
          })
          .finally(function () {
            changeShowResponse(true) //we use it clear the error or succes msg after 5secs
            setTimeout(()=>{
              changeShowResponse(false)
          }, 5000)
          });
          console.log(inputValues)
  }
    return (
        <div className={styles.container}>
             <div className={styles.login_container}>
                 <h2>Convene</h2>
                <h1 className={styles.header}>CREATE YOUR ACCOUNT </h1>
             <Formik onSubmit={onSubmitHandler} 
                initialValues={{ fullname: ' ',email:'', password:''}}>
                {({
                    values,
                    handleChange
                })=>{
                    return (
                        <Form>
                            <div className={styles.input_wrapper}>
                                <Input value={values.fullname} onChange={handleChange} variant="secondary" name='fullname' type='text' />
                                <Input value={values.email} variant="primary" name='email' onChange={handleChange} type='email' />
                                <Input value={values.password} onChange={handleChange} variant="primary" name='password' type='password' />
                               
                            </div>
                             { showResponse &&(
                                 <div> 
                                 { user?.data?.status === 1?
                                     (<p className={styles.sucess}>{user?.data?.message}</p>)
                                     : (<p className={styles.error}>{user?.data?.message}</p>)
                                 }
                              </div>
                             )
                             }
                             
                            <div className={styles.button_wrapper}>
                            <Button type='submit'  variant='primary' size="large">SIGN UP</Button>
                            </div>
                     </Form>
                    )
                }}
           </Formik>
            <p className={styles.account}>Already have an account? <Link className="anchor_link" to='/login'><span>Sign IN Now</span></Link></p>
            <hr className={styles.line} />
            <p className={styles.account}>Continue with social media </p>
            <div className={styles.icon_images}>
                <Icon  img={Img1} variant="primary"></Icon>
                <Icon   img={Img2} variant="secondary"> </Icon>
                <Icon   img={Img3} variant="primary"> </Icon>
            </div>
            </div>
        </div>
        )     
}
export default SignUp