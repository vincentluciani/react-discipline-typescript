import { IconType } from 'react-icons/lib';
import styles from './ActionButton.module.css'


interface ButtonProps {
    title: string;
    icon: any;
    buttonAction: ()=>void;
}

const ActionButton = ({title, icon, buttonAction }: ButtonProps) => {

    return(
        <div className={styles['action-button']}>
            <div>{title}</div>
            <div className={styles["action-icon-container"]} onClick={buttonAction}>{icon}</div>
        </div>
    )


}

export default ActionButton