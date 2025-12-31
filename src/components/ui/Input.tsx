
interface InputProps {
    type: "text" | "email" | "password",
    placeholder: string,
    onChange?: (e: any) => void,
}

<input type="text" placeholder="Title" className="border border-gray-300 p-2 rounded-md outline-none w-full mb-5"/>

const Input = (props: InputProps) => {
  return (
    <input onChange={props.onChange} type={props.type} placeholder={props.placeholder} className="border border-gray-300 p-2 rounded-md outline-none w-full mb-5"/>
  )
}

export default Input
