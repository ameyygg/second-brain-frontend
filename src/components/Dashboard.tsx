import Mainpage from './Mainpage'
import Sidebar from './Sidebar';

const Dashboard = () => {

  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Mainpage />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
