import styles from './CommonBox.module.css'
import { FaTasks } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useState } from 'react';
const CommonBox = props => {

    const wrapperClassName =  `${styles['common-box-wrapper']} ${props.className} ${props.taskStatus && styles[props.taskStatus]}`
   
    return (
        <div className={wrapperClassName}>
                {props.children}
        </div>
    )
}

export default CommonBox