import styles from './CollapsableBoxWithTitleWrapper.module.css'
import { FaTasks } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useState } from 'react';
import CommonBox from './CommonBox'

const CollapsableBoxWithTitleWrapper = props => {

    const wrapperClassName =  `${styles['box-wrapper']} ${props.className} ${props.taskStatus && styles[props.taskStatus]}`
   
    const [expanded,setExpanded] = useState(false)

    return (
        <CommonBox className={wrapperClassName}>
            <div className = {styles['box-header']}>
                <div className={styles['box-icon-container']}><FaTasks /></div>
                <div className={styles['box-title']}>Title: {props.boxTitle}</div>
                <div className={styles['expander']}><BsPlusLg /></div>
            </div>
            <div className={styles['box-content']}>
                {props.children}
            </div>
        </CommonBox>
    )
}

export default CollapsableBoxWithTitleWrapper