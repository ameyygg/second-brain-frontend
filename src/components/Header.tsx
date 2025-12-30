import { Plus, Share } from 'lucide-react'
import Button from './ui/Button'
//zustand
import useModalStore from '../store/useModalStore'

const Header = () => {
  //zustand
  const openModal = useModalStore((state) => state.openModal)

  return (
    <div className='h-20 border-b border-gray-300 flex items-center justify-between'>
        <p className='text-2xl font-semibold text-gray-500 ml-10'>Welcome back to the dump!</p>
        <div className='flex gap-2 mr-10'>
            <Button variant='secondary' text='Share brain' size='md' startIcon={<Share size={20} />} onClick={() => {}}/>
            <Button variant='primary' text='Add content' size='md' startIcon={<Plus size={20} />} onClick={openModal}
            />
        </div>
    </div>
  )
}

export default Header
