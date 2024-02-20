import React from 'react'
import { useState } from 'react';
import SignIn from './compotent/SignIn';
import SignUp from './compotent/SignUp';
import ForgetPassword from './compotent/ForgetPassword';

function Authentication({setLoading}) {
    // const { loggedIn } = useAuthStatus();
    const [AuthOption, setAuthOption] = useState ('Sign In');
    let authToShow = null;
    switch (AuthOption) {
        case 'Sign In':
            authToShow = (
                <SignIn setAuthOption={setAuthOption} setLoading={setLoading} />
            );
            break;
        case 'Sign Up':
            authToShow = (
                <SignUp setAuthOption={setAuthOption} setLoading={setLoading} />
            );
            break;
        case 'Forget Password':
            authToShow = (
                <ForgetPassword setAuthOption={setAuthOption} setLoading={setLoading} />
            );
            break;
        default:
            break;
    }
    // if (loggedIn) {
    //     return console.log('logIN');
    // }
  return (
    <div> {authToShow} </div>
  )
}

export default Authentication