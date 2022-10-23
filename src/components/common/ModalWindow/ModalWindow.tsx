import React from "react";
import ReactDOM from "react-dom";

interface ModalWindowProps {
    onConfirm: ()=>void;
    className: any;
    children: any;
    modalTitle: string;
}

interface OverlayProps {
    onConfirm: ()=>void;
    className: any;
    title: string
}

const BackDrop = () => {
    return (
        <div className="backdrop"></div>
    )
}
const Overlay= ({onConfirm, className, title }: OverlayProps) => {
    return (
        <div className={className}>
            <div>{title}</div>
            <div onClick={onConfirm}></div>
        </div>
    )
}

const ModalWindow = ({onConfirm, className, children, modalTitle }: ModalWindowProps)  => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Overlay onConfirm={onConfirm} title={modalTitle} className={className}>{children}</Overlay>, document.getElementById('overlay-root') as HTMLElement)}
        </React.Fragment>
    )
}

export default ModalWindow

