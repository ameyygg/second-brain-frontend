import Mainpage from './Mainpage'
import AddContentModal from './AddContentModal'
import useModalStore from '../store/useModalStore'
import Sidebar from './Sidebar';

const Dashboard = () => {
  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Mainpage />
        </div>
        {isOpen && <AddContentModal />}
      </div>
    </div>
  )
}

export default Dashboard
