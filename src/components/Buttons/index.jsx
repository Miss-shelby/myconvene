import styles from "./button.module.css"
const Button = ({variant,size,children,type})=>{
    return(<div>
        <button
        data-variant={variant}
        data-size={size} type={type} className={styles.btn}>{children}</button>
    </div>)
}
export default Button;