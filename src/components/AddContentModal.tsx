import useModalStore from "@/store/useModalStore"
import Button from "./ui/Button"
import { X } from "lucide-react"
import Input from "./ui/Input"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "@/config"

interface modalProps {
  onContentAdded: () => void;
}

const AddContentModal = ({ onContentAdded }: modalProps) => {
  const closeModal = useModalStore((state) => state.closeModal)

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const authorization = localStorage.getItem("authorization");

  const handleSubmit = async () => {
    const res = await axios.post(`${BACKEND_URL}/api/v1/content`, {
      title,
      link,
      description
    }, {
      headers: {
        authorization: authorization
      }
    })

    if(res.status === 200){
      setTitle("");
      setLink("");
      setDescription("");

      closeModal();
      alert("content added successfully");
      onContentAdded();
    }
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex bg-black/40 items-center justify-center">
      <div className="w-md z-10 bg-neutral-100 p-5 rounded-md shadow-md relative">
        <div className="absolute top-5 right-5 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 rounded-md p-0.5 cursor-pointer" onClick={closeModal}>
          <X />
        </div>
        <p className="text-md mb-1 mt-5">Title</p>
        <Input type="text" placeholder="Title" onChange={(e: any) => setTitle(e.target.value)} />

        <p className="text-md mb-1">Link</p>
        <Input type="text" placeholder="Link" onChange={(e: any) => setLink(e.target.value)} />

        <p className="text-md mb-1">Description</p>
        <Input type="text" placeholder="Description" onChange={(e: any) => setDescription(e.target.value)} />

        <div className="flex gap-4">
          <Button variant="primary" text="Submit" size="md" onClick={handleSubmit}/>
          <Button variant="secondary" text="Cancel" size="md" onClick={closeModal}/>
        </div>
      </div>
    </div>
  )
}

export default AddContentModal
