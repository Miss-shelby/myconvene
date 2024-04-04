import styles from "./user-nav.module.css";
import Input from "../Inputs";
import { Link,useNavigate } from "react-router-dom";
import React from "react";
const questions=[
    {
        id:1,
        username:'david',
        question:"hey, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        comment:'@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.'
    },
    {
        id:2,
        username:'maxblagan',
        question:"Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        comment:'@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.'
    },
]

const comments=[
    {
        id:1,
        username:'david',
        comment:'@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.'
    },
    {
        id:2,
        username:'maxblagan',
        comment:'@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.'
    },
]

const UserNav = ()=>{
    return(
        <>
            <div>
                <MenuNav/>
                <div className={styles.meetupWrapper}>
                    <LeftNav />
                    <div className={styles.meetupsWrapper}>
                        <div className={styles.marginTop}><MainMenu/></div>
                        <div className={styles.meetupOne}>
                            <div className={styles.avatar}>
                                <p className={styles.avatarImg}><img src="src\assets\images\Avatar.png" alt="" srcset="" /><span>Family Guy</span></p>
                                <p className={styles.author}>Posted by ruletheworld 23 hours ago</p>
                            </div>
                            <div className={styles.header}>
                                <h4>Who’s the worst family guy character ever?</h4>
                                <button className={styles.meetUpBtn}>join meetup</button>
                            </div>
                            <p  className={styles.content}>It’s easily Stewie. He went from 
                                a top character to a fledgling dingbat. Stewie was
                                able to outwit and out cool pretty much everyone he met,
                                then all of a sudden I’m supposed to believe some chump 
                                (Doug) could break him down so hard? It was pretty
                                insulting as a viewer. Yeah Doug and how Stevie’s
                                    whole personality changes when around him is lame.
                            </p>
                            <img src="src\assets\images\image 2.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserNav;
export const LeftNav = ()=>{
    const navigate = useNavigate();
    const clearUserData= ()=>{
      alert('data cleared')
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
        <div>
            <ul className={styles.navContainer}>
                <li><img src="src\assets\images\Vector (19).png" alt="" srcset="" /> <span>Home</span> </li>
                <li><img src="src\assets\images\Vector (18).png"alt="" srcset="" /> <span>Meetups </span> </li>
                <li><img src="src\assets\images\Vector (20).png" alt="" srcset="" /><span>Tags</span> </li>
                <li> <Link to="/user"><img src="src\assets\images\Vector (14).png" alt="" srcset="" /><span>Profile</span></Link> </li>
                <li className={styles.logout} onClick={clearUserData}><img src="src\assets\images\logoutBtn.png" alt="" srcset="" /> <span>Logout</span> </li>
            </ul>
            
        </div>
        </>
    )
}
export const MenuNav = ()=>{
    return(
        <>
        <div className={styles.navMenu}>
            <div className={styles.userName} >
                <p className={styles.user}  >A</p>
                <p>Basic User <span>@alien_01</span> </p>
            </div>
            <div className={styles.inputWrapper}>
                <Input variant='unique' name='search convene'/>
                <img className={styles.searchIcon} src="src\assets\images\Vector (17).png" />
                <ul className={styles.icons}>
                    <li><img src="src\assets\images\Vector (16).png" alt="" srcset="" /><span>Top</span></li>
                    <li><img src="src\assets\images\Vector (15).png" alt="" srcset="" /><span>New</span></li>
                    <li><img src="src\assets\images\Icon.png" alt="" srcset="" /><span>Hot</span></li>
                </ul>
            </div>
            <div className={styles.notification}>
                    <img src="src\assets\images\Tail icon.png" alt="" srcset="" />
                    <img src="src\assets\images\icon (1).png" alt="" srcset="" />
            </div>
        </div>
        </>
    )
}
export const MainMenu =()=>{
    return (
        <>
            <div className={styles.meetupOne}>
                <div className={styles.avatar}>
                    <p className={styles.avatarImg}><img src="src\assets\images\Avatar.png" alt="" srcset="" /><span>Family Guy
</span></p>
                    <p className={styles.author}>Posted by ruletheworld 23 hours ago</p>
                </div>
                <div className={styles.header}>
                    <h4>Who’s the worst family guy character ever?</h4>
                    <button className={styles.meetUpBtn}>join meetup</button>
                </div>
                <p  className={styles.content}>It’s easily Stewie. He went from 
                    a top character to a fledgling dingbat. Stewie was
                     able to outwit and out cool pretty much everyone he met,
                      then all of a sudden I’m supposed to believe some chump 
                      (Doug) could break him down so hard? It was pretty
                       insulting as a viewer. Yeah Doug and how Stevie’s
                        whole personality changes when around him is lame.
                </p>
                <div className={styles.group}>
                    <div className={styles.questions}>
                        <p className={styles.avatarImg}><img src="src\assets\images\Icon (2).png" alt="" srcset="" /><span>149 Questions</span></p>
                        <p> 149<img src="src\assets\images\Vector (21).png" alt="" srcset="" /></p>
                        <p><img src="src\assets\images\Vector (22).png" alt="" srcset="" /></p>
                        <p className={styles.avatarImg}><img src="src\assets\images\Vector (23).png" alt="" srcset="" /><span> save </span></p>
                        <p className={styles.avatarImg}><img src="src\assets\images\Vector (24).png" alt="" srcset="" /><span> share </span></p>
                    </div>
                    <div>
                     <img src="src\assets\images\icon (1).png" alt="" srcset="" />
                    </div>
                </div>
                <div className={styles.avatarInput}>
                    <img src="src\assets\images\Oval.png" alt="" srcset="" />
                   <div className={styles.wrapper}>
                        <Input variant='primary' name='post a question'/>
                        <img className={styles.sendBtn} src="src\assets\images\Vector (25).png" alt="" srcset="" />
                   </div>
                   
                </div>
            </div>
        </>
    )
}

export const Questions = () => {
    return (
        <>
            {questions.map((question) => (
                <div key={question.id} className={styles.meetupTwo}>
                    <div className={styles.votes}>
                        <img src="src\assets\images\Vector (27).png" alt="" srcset="" />
                        <p>149</p>
                        <img src="src\assets\images\Vector (27).png" alt="" srcset="" />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.avatarTwo}>
                            <div className={styles.useravatar}>
                                <p className={styles.avatarImg}><img src="src\assets\images\Avatar.png" alt="" srcset="" /><span className={styles.username}>{question.username}</span></p>
                                <p className={styles.author}>2 weeks ago</p>
                            </div>
                            <div className={styles.reply}>
                                <img src="src\assets\images\Path.png" alt="" srcset="" />
                                <p>Reply</p>
                            </div>
                        </div>
                        <p className={styles.content}>{question.question}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export const Comments = () => {
    return (
        <div className={styles.commentWrapper}>
            {comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <div className={styles.votes}>
                        <img src="src\assets\images\Vector (27).png" alt="" srcset="" />
                        <p>149</p>
                        <img src="src\assets\images\Vector (27).png" alt="" srcset="" />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.avatarTwo}>
                            <div className={styles.useravatar}>
                                <p className={styles.avatarImg}><img src="src\assets\images\Avatar.png" alt="" srcset="" /><span className={styles.username}>{comment.username}</span></p>
                                <p className={styles.author}>2 weeks ago</p>
                            </div>
                            <div className={styles.reply}>
                                <img src="src\assets\images\Path.png" alt="" srcset="" />
                                <p>Reply</p>
                            </div>
                        </div>
                        <p className={styles.content}>{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export const PostQuestion=()=>{
    return(
        <>
        <div className={styles.questionWrapper}>
            <img src="src\assets\images\Avatar.png" alt="" srcset="" />
            <div className={styles.textarea}>
                <Input variant='secondary' name='post a question...'/>
            </div>
            <button className={styles.btn}>send</button>
        </div>
        </>
    )
}