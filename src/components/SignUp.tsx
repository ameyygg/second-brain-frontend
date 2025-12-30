import Input from './ui/Input'
import Button from './ui/Button'

const SignUp = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-neutral-200'>
      <p className='text-2xl font-bold mb-5'>Create an account 😍</p>
      <div className="w-sm z-20 p-5 rounded-md bg-white">
        <p className="text-md mb-1">First Name</p>
        <Input type="text" placeholder="John" />

        <p className="text-md mb-1">Last Name</p>
        <Input type="text" placeholder="Doe" />

        <p className="text-md mb-1">Email</p>
        <Input type="email" placeholder="johndoe@email.com" />

        <p className="text-md mb-1">Password</p>
        <Input type="password" placeholder="••••••" />

        <div className="flex gap-4">
          <Button variant="primary" text="Create an account" size="md" onClick={() => {}}/>
        </div>
      </div>
      <p className='mt-2'>Already have an account? <span className='text-blue-700 cursor-pointer hover:underline'>Sign in</span></p>
    </div>
  )
}

export default SignUp
