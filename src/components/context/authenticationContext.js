import React, { useState } from 'react'

const AuthenticationContext = React.createContext({
    isLoggedIn: false,
    login: (method) => {},
    logout: () => {}
})

export default AuthenticationContext

export const AuthenticationContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (method) => {
    setIsLoggedIn(true)
    console.log('logged in with method: '+ method)
  }
  const logoutHandler = () => {
    setIsLoggedIn(false)
  }
   return <AuthenticationContext.Provider value={{
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }}>
        {props.children}
    </AuthenticationContext.Provider>
}