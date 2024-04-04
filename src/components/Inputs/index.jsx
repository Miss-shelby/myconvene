import styles from "./input.module.css"
const Input = ({name,type,variant,onChange})=>{
    let pHolder = name[0].toUpperCase() + name.slice(1) 
    return (
    <div>
        <input className={styles.inputField}  onChange={onChange} name={name} type={type} placeholder={pHolder} data-variant={variant} />
    </div>
    )
}
export default Input