import React from "react";
import styles from './userProfile.module.css'
import { MenuNav } from "../../components/User_Navigation";
import { LeftNav } from "../../components/User_Navigation";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons"
const User = ()=>{
    return (
        <>
        <div className={styles.user}>
            <MenuNav/>
            <div className={styles.container}>
                <LeftNav/>
                <div className={styles.profileSection}>
                    <div className={styles.profileContainer}>
                        <div className={styles.coverPhoto}>
                            <div className={styles.fileInputWrapper}>
                                    <input  className={styles.fileInput}   type="file"  id="fileInput"  />
                                <label htmlFor="fileInput" className={styles.customFileButton}> Edit cover photo</label>
                            </div>
                        <div className={styles.profilephtotContainer}>
                                <img src="src\assets\images\profilephoto (2).png" alt="" srcset="" />
                        </div>
                        </div>
                        <div className={styles.userProfile}>
                            <p className={styles.username}>Charles Deo <span> UI/UX Designer</span></p>
                            <div className={styles.btnWrapper}>
                                <Button>Edit profile</Button>
                            </div>
                            <p></p>
                        </div>
                    </div> 
                    <div className={styles.userAbout}>
                        <div className={styles.About}>
                            <h6>About</h6>
                            <ul className={styles.userInfo}>
                            <li> <img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>male</span> </li>
                            <li> <img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>Born June 26, 1980</span> </li>
                            <li> <img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>2239  Hog Camp Road <br /> Schaumburg</span> </li>
                            <li> <img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>charles5182@ummoh.com</span> </li>
                            <li> <img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>33757005467</span> </li>
                            </ul>
                             </div>
                        <div className={styles.userEngagements}>
                            <div className={styles.meetups}>
                                <p>Upcoming Meetups</p>
                                <p className={styles.numbers}>200</p>
                            </div>
                            <div className={styles.meetups}>
                                <p>Questions</p>
                                <p className={styles.numbers}>200</p>
                            </div>
                            <div className={styles.meetups}>
                                <p>Comments</p>
                                <p className={styles.numbers}>200</p>
                            </div>
                        </div>
                        <div className={styles.admins}>
                            <h4>Top Admins to follow</h4>
                            <div className={styles.admin}>
                                <img src="src\assets\images\Avatar.png" alt="" srcset="" />
                                <p className={styles.adminName}>Eddie Lobanovskiy <span>laboanovskiy@gmail.com</span></p>
                            </div>
                            <div className={styles.admin}>
                                <img src="src\assets\images\Avatar.png" alt="" srcset="" />
                                <p className={styles.adminName}>Eddie Lobanovskiy <span>laboanovskiy@gmail.com</span></p>
                            </div>
                            <div className={styles.admin}>
                                <img src="src\assets\images\Avatar.png" alt="" srcset="" />
                                <p className={styles.adminName}>Eddie Lobanovskiy <span>laboanovskiy@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default User;