// import Button from "../../components/Buttons"
import React from "react";
import styles from "./home.module.css";
import Nav from "../../components/NavBar";
import { Footer } from "../../components/footer/footer";
import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import { useState } from "react";
// import MeetUp from "../MeetUpPage/meetUp";
// import { useAuth } from "../../contexts/authContext";
const Home = () => {
  // const {curentUser} = useAuth
  return (
    <div >
      <div className={styles.innerContainer}>
          <Nav/>
          {/* <MeetUp/> */}
          <div className={styles.hero}>
              <div className={styles.heroWrapper}>
                      <h4 className={styles.hero_text}>
                        Lorem ipsum dolor sit amet consectetur.
                      <span className={styles.span}> Ornare hendrerit</span>
                      </h4>
                      <p className={styles.hero_text2}>
                      Lorem ipsum dolor sit amet consectetur. Ornare hendrerit
                      </p>
                      <div className={styles.btn_wrapper}>
                          <Button variant="primary" size="medium"> Log in / Create Class </Button>
                      </div>
                </div>
                <div className={styles.heroBg}>
                    <div className={styles.navMiddle}>
                      <p>No suscription</p>
                      <p>No suscription</p>
                      <p>No suscription</p>
                    </div>
                </div>
              <div className={styles.aboutMe}>
                  <h6 className={styles.aboutTitle}>About</h6>
                    <p className={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit, voluptatem magnam, natus iure voluptates accusamus
                     eaque ad harum a consequuntur temporibus fugiat pariatur possimus. Voluptatibus aliquid quasi magnam voluptas? </p>
                    <div className={styles.forum} >
                        <div className={styles.forumText}>
                          <p className={styles.forumTextLead}>Community Forums and <span>Discussions</span></p>
                          <p className={styles.forumTextLeadTWo}>Some Meetup websites offer community forums or discussion
                            boards where users can connect, share ideas, and discuss topics related to their interests or events.</p>
                        </div>
                        <div className={styles.forumImg}>
                            <img src="src\assets\images\image 10.png" alt="" srcset="" />
                        </div>
                     </div>
                     <div className={styles.users} >
                        <div className={styles.forumImg}>
                          <img src="src\assets\images\Frame 1000002978.png" alt="" srcset="" />
                        </div>
                        <div className={styles.forumText}>
                          <p className={styles.forumTextLead}>User Registration and  <span>Profile Creation</span></p>
                          <p className={styles.forumTextLeadTWo}>Users can sign up for an account and create a profile where they can provide information about their interests, location, and preferences.</p>
                        </div>
              </div>
              </div>
                <div className={styles.suscribers}>
                    <p className={styles.suscribe}>Join 500,000+ Subscribers </p>
                    <p className={styles.exclusive}> Get exclusive access to freebies and news.
                    We don’t spam, rent or sell your email. <span className={styles.privacy_policy}> <a href="#">See our Privacy Policy</a></span></p>
                </div>
                <div className={styles.input_wrapper}>
                 <div  className={styles.input_text}>
                      <Input variant='tertiary' name='Enter your email address here'></Input>
                      <button className={styles.smallBtn}>send</button>
                 </div>
                </div>
                <Footer group={"footer"} />
               
                {/* <Greeting/> */}
          </div>
      </div>
    </div>
  );
};
export default Home;

export const Greeting =()=>{
  const [toggle,setToggle] = useState(true)
  return(
    <div>
      {toggle && <div>fatimah is angry with her facilitator </div>}
      {!toggle && <div>fatimah is now happy he has apologized</div>}
      <button onClick={()=> setToggle((prev)=> !prev)}>apologize</button>
    </div>
  )
}
// export class Butoon extends React.Component{
//   render(){
//     return <button>click me</button>
//   }
// }
