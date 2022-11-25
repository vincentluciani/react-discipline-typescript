import styles from './HabitBox.module.css'
import CollapsableBoxWithTitleWrapper from '../wrappers/Box/CollapsableBoxWithTitleWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import React, { useContext } from 'react';

const HabitBox = props => {

    const [taskStatus,setTaskStatus] = useState('done')

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'

    return (
        <CollapsableBoxWithTitleWrapper taskStatus={taskStatus} boxTitle={props.boxTitle} className={styles['habit-box']}>Text inside the box - {loginStatus}</CollapsableBoxWithTitleWrapper>
    )
}

export default HabitBox