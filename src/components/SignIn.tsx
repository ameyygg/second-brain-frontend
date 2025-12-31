import Input from './ui/Input'
import Button from './ui/Button'
import { Link } from 'react-router'

const SignIn = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-neutral-200'>
      <p className='text-2xl font-bold mb-5'>Welcome back 👋</p>
      <div className="w-sm z-20 p-5 rounded-md bg-white">
        <p className="text-md mb-1">Email</p>
        <Input type="email" placeholder="johndoe@email.com" />

        <p className="text-md mb-1">Password</p>
        <Input type="password" placeholder="••••••" />

        <div className="flex gap-4">
          <Button variant="primary" text="Log in" size="md" onClick={() => {}}/>
        </div>
      </div>
      <p className='mt-2'>Don't have an account yet? <span className='text-blue-700 cursor-pointer hover:underline'><Link to="/">Sign up</Link></span></p>
    </div>
  )
}

export default SignIn
