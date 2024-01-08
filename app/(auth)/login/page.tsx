'use client'
import CreateUser from '@/components/ui/auth/CreateUser'
import { Forgot } from '@/components/ui/auth/Forgot'
import SignIn from '@/components/ui/auth/SignIn'
import React, { useState } from 'react'

function Login() {
    const [which, setWhich] = useState(1);

    switch (which) {
        case 1:
            return <SignIn setWhich={setWhich}/>;
        case 2:
            return <CreateUser setWhich={setWhich} />;
        case 3:
            return <Forgot setWhich={setWhich}/>;
        default:
            return <SignIn setWhich={setWhich}/>;
    }
    
          {/* <CreateUser/> */}
          {/* <SignIn/> */}
        //   <Forgot/>
}

export default Login