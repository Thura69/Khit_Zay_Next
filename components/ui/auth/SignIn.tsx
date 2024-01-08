import React, { FC } from 'react'
import { AuthInput } from './AuthInput'

export interface SignInProps{
    setWhich:(newValue:number)=>void
}
const SignIn:FC<SignInProps> = ({setWhich}) => {
  return (
   <div className='my-4 lg:w-[500px] lg:mx-auto'>
      <div className=' flex flex-col justify-center gap-3'>
      <AuthInput title={"Email"} />
      <AuthInput title={"Password"} />
     </div>
    <div className='w-full  flex items-center justify-center my-4'>
        <button className='bg-black p-3 px-6 text-xs  mx-auto text-white'>SIGN IN</button>
    </div>
    <div className='text-xs text-[#1e1e1ea0] text-center '>
        <p><span className='cursor-pointer' onClick={()=>setWhich(3)}>Forgot your password?</span> | <span className=' cursor-pointer' onClick={()=>setWhich(2)}>Create a account</span></p>
    </div>
    </div>
  )
}

export default SignIn