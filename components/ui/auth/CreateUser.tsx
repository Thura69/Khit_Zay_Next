import React, { FC } from 'react'
import { AuthInput } from './AuthInput'
import { SignInProps } from './SignIn'


const CreateUser:FC<SignInProps> = ({setWhich}) => {
  return (
    <div className='my-4 lg:w-[500px] lg:mx-auto'>
      <div className=' flex flex-col justify-center gap-3'>
      <AuthInput title={"First Name"} />
      <AuthInput title={"Last Name"} />
      <AuthInput title={"Email"} />
      <AuthInput title={"Password"} />
     </div>
   <div className='w-full flex-col gap-6  flex items-center justify-center my-4'>
        <button className='bg-black p-3 px-6 text-xs  mx-auto text-white'>CREATE</button>
        <button onClick={()=>setWhich(1)} className=' uppercase text-sm'>Cancel</button>
    </div>
    </div>
  )
}

export default CreateUser