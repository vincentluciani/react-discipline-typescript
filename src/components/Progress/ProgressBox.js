import styles from './ProgressBox.module.css'
import CollapsableBoxWithTitleWrapper from '../common/BoxWrappers/CollapsableBoxWithTitleWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import React, { useContext } from 'react';

const ProgressBox = props => {

    const [taskStatus,setTaskStatus] = useState('done')

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'

    return (
        <CollapsableBoxWithTitleWrapper taskStatus={taskStatus} boxTitle={props.boxTitle} className={styles['habit-box']}>Text inside the box - {loginStatus}</CollapsableBoxWithTitleWrapper>
    )
}

export default ProgressBox