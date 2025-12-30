import useModalStore from "@/store/useModalStore"
import Button from "./ui/Button"
import { X } from "lucide-react"
import Input from "./ui/Input"

const AddContentModal = () => {
  const closeModal = useModalStore((state) => state.closeModal)

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex bg-black/40 items-center justify-center" onClick={closeModal}>
      <div className="w-md z-10 bg-neutral-100 p-5 rounded-md shadow-md relative">
        <div className="absolute top-5 right-5 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 rounded-md p-0.5 cursor-pointer" onClick={closeModal}>
          <X />
        </div>
        <p className="text-md mb-1 mt-5">Title</p>
        <Input type="text" placeholder="Title" />

        <p className="text-md mb-1">Link</p>
        <Input type="text" placeholder="Link" />

        <p className="text-md mb-1">Description</p>
        <Input type="text" placeholder="Description" />

        <div className="flex gap-4">
          <Button variant="primary" text="Submit" size="md" onClick={() => {}}/>
          <Button variant="secondary" text="Cancel" size="md" onClick={closeModal}/>
        </div>
      </div>
    </div>
  )
}

export default AddContentModal
