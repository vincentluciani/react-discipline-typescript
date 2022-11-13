import React,{useState} from "react";
import ReactDOM from "react-dom";
import styles from './ModalWindow.module.css'
// type ModalWindowProps = {
//     onConfirm: any;
//     className: any;
//     children: React.ReactNode
//     modalTitle: string;
// }

// interface OverlayProps {
//     onConfirm: ()=>void;
//     className: any;
//     title: string
// }



const BackDrop = () => {
    return (
        <div className={styles["backdrop"]}></div>
    )
}
/* https://stackoverflow.com/questions/63566207/error-with-logical-operator-jsx-and-typescript */
const Overlay= (props) => {
    return (
        (<div className={styles["overlay"]}><div>{props.title}</div><div>{props.children}</div><div onClick={props.onConfirm}>OK</div></div>) 
    )
}

const ModalWindow = ( props )  => {
    const [isVisible,setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false);
        props.onConfirm();
    }
    return (
        <React.Fragment>
           <> { isVisible &&  ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))} </>
           <> { isVisible &&  ReactDOM.createPortal(<Overlay onConfirm={handleClose} title={props.modalTitle} className={props.className} children={props.children}></Overlay>, document.getElementById('overlay-root'))} </>
        </React.Fragment>
    )
}

export default ModalWindow

