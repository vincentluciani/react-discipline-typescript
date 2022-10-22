import styles from './BoxWrapper.module.css'
import { FaTasks } from "react-icons/fa";
const BoxWrapper = props => {

    const classes = styles['box-wrapper'] + ' ' +  props.className

    return (
        <div className={classes}>
            <div className = {styles['box-header']}>
                <div class={styles['box-icon-container']}><FaTasks /></div>
                <div class={styles['box-title']}>Title: {props.boxTitle}</div>
                <div class={styles['expander']}>+</div>
            </div>
            {props.children}
        </div>
    )
}

export default BoxWrapper