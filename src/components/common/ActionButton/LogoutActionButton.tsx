import { TfiWrite } from "react-icons/tfi";
import ActionButton from "./ActionButton";
import AuthenticationContext from '../../context/authenticationContext'
import React, { useContext } from 'react';

const LoginActionButton = () => {

    const context = useContext(AuthenticationContext);
    const logoutHandler = () =>{
        console.log('calling context function')
        context.logout()
    }

    return(
        <ActionButton title='Logout' icon={React.createElement(TfiWrite)} buttonAction={logoutHandler} />
    )

}
export default LoginActionButton