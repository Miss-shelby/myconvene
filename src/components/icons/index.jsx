import styles from "./icon.module.css";

const Icon = ({img,variant,icon_name})=>{
    return (
            <div className={styles.circle} data-variant={variant} >
               <div className={styles.imgcontainer}>
                  <img src={img} alt={icon_name} />
               </div>
            </div>
        )
}
export default Icon;
// how users are stored in database
// const users =[
//    {
//       id:1,
//       name:'ammie',
//       email:"ceeyntia@gmail.com",
//       role:'admin'
//    },
//    {
//       id:2,
//       name:'sommie',
//       email:"sommie@gmail.com",
//       role:'user'
//    },
//    {
//       id:3,
//       name:'mary',
//       email:"maryadmina@gmail.com",
//       role:'user'
//    }
// ]