import { IconType } from 'react-icons/lib';
import styles from './ActionButton.module.css'
import CommonBox from '../../wrappers/Box/CommonBox'

interface ButtonProps {
    title: string;
    icon: any;
    buttonAction: ()=>void;
}

const ActionButton = ({title, icon, buttonAction }: ButtonProps) => {

    return(
        <CommonBox className={styles['action-button']} onClick={buttonAction}>
            <div>{title}</div>
            <div className={styles["action-icon-container"]} >{icon}</div>
        </CommonBox>
    )


}

export default ActionButton