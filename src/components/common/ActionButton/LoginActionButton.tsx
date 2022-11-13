import { TfiWrite } from "react-icons/tfi";
import ActionButton from "./ActionButton";
import AuthenticationContext from '../../context/authenticationContext'
import React, { useContext } from 'react';

const LoginActionButton = () => {

    const context = useContext(AuthenticationContext);
    const loginHandler = () =>{
        console.log('calling context function')
        context.login('facebook')
    }

    return(
        <ActionButton title='Login' icon={React.createElement(TfiWrite)} buttonAction={loginHandler} />
    )

}
export default LoginActionButton