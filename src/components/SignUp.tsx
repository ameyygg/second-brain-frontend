import Input from './ui/Input'
import Button from './ui/Button'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '@/config'

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      firstName,
      lastName,
      email,
      password
    })

    if(res.status === 201){
      navigate('/signin');
    }
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-neutral-200'>
      <p className='text-2xl font-bold mb-5'>Create an account 😍</p>
      <div className="w-sm z-20 p-5 rounded-md bg-white">
        <p className="text-md mb-1">First Name</p>
        <Input type="text" placeholder="John" onChange={(e: any) => setFirstName(e.target.value)} />

        <p className="text-md mb-1">Last Name</p>
        <Input type="text" placeholder="Doe" onChange={(e: any) => setLastName(e.target.value)} />

        <p className="text-md mb-1">Email</p>
        <Input type="email" placeholder="johndoe@email.com" onChange={(e: any) => setEmail(e.target.value)} />

        <p className="text-md mb-1">Password</p>
        <Input type="password" placeholder="••••••" onChange={(e: any) => setPassword(e.target.value)} />

        <div className="flex gap-4">
          <Button variant="primary" text="Create an account" size="md" onClick={handleSubmit}/>
        </div>
      </div>
      <p className='mt-2'>Already have an account? <span className='text-blue-700 cursor-pointer hover:underline'><Link to="/signin">Sign in</Link></span></p>
    </div>
  )
}

export default SignUp
