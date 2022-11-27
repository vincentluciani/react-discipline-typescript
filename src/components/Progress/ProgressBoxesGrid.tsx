import styles from './ProgressBoxesGrid.module.css'
import ProgressBox from './ProgressBox.js';
import React from 'react'
import JournalActionButton from '../common/ActionButton/JournalActionButton'
import LoginActionButton from '../common/ActionButton/LoginActionButton'
import LogoutActionButton from '../common/ActionButton/LogoutActionButton'


interface ProgressBoxesProp {
    progressList: Array<Progress>;
}

interface Progress {
    id: number;
    progressName: string;
}
const ProgressBoxesGrid = ({progressList}:ProgressBoxesProp) => {

     
    return( <div className={styles['progress-boxes-grid']}>
    <> 
    { progressList.map((item:Progress, index:number) => (<ProgressBox boxTitle={item.progressName}></ProgressBox>)) }

    </>  
    </div>);

}

/* <JournalActionButton />
<LoginActionButton />
<LogoutActionButton /> */

export default ProgressBoxesGrid