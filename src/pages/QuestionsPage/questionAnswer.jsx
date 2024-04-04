import React from 'react'
import styles from "./questions.module.css"
import { MainMenu, } from '../../components/User_Navigation';
import { MenuNav } from '../../components/User_Navigation';
import { LeftNav } from '../../components/User_Navigation';
import { Questions, Comments,PostQuestion } from "../../components/User_Navigation";
const QuestionsAnswerDisplay=()=>{
    return (
        <>
        <div className={styles.wrapper}>
            <MenuNav/>
            <div className={styles.navWrapper}>
                <div className={styles.LeftNavWrapper}>
                    <LeftNav/>
                </div>
               <div>
                   <div className={styles.mainWrapper}> <MainMenu/></div>
                    <Questions/>
                    <div className={styles.commentWrapper}>
                        <Comments />
                    </div>
                    <PostQuestion />
               </div>
            </div>
        </div>
        </>
    )
}
export default QuestionsAnswerDisplay;