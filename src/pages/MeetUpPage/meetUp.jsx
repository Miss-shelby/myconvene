import React, { useState } from "react";
import UserNav from "../../components/User_Navigation";
import styles from './meetup.module.css'
import { Link } from "react-router-dom";
const MeetUp =()=>{
    return (
        <>
         <div className={styles.wrapper}>
         <Link to="/questionAnswer"><UserNav/></Link>
         </div>
        </>
    )
}
export default MeetUp;