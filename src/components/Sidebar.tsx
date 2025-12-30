import { House, Link2, LogOut, Repeat2, Settings, Youtube } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='h-screen w-2xs bg-neutral-100 flex flex-col'>
      <div className='h-20 border-b border-gray-300 flex items-center'>
        <p className='text-2xl font-bold text-indigo-600 ml-8'>ThinkBin</p>
      </div>
      <div className='flex-1 p-5 space-y-1 overflow-y-auto'>
        <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
            <House size={18}/>
            <p>Home</p>
        </div>
        <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
            <Link2 size={18}/>
            <p>Links</p>
        </div>
        <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
            <Repeat2 size={18}/>
            <p>Tweets</p>
        </div>
        <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
            <Youtube size={18}/>
            <p>Videos</p>
        </div>
      </div>
        <div className="border-t border-gray-300 px-4 py-4 space-y-1">
            <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
                <Settings size={18}/>
                <p>Settings</p>
            </div>
            <div className='text-md py-1.5 px-3 rounded-md hover:bg-neutral-300 text-gray-700 flex items-center gap-2 mb-2 cursor-pointer'>
                <LogOut size={18}/>
                <p>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
