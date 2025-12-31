import { useEffect, useState } from 'react'
import Header from './Header'
import Card from './ui/Card'
import axios from 'axios';
import { BACKEND_URL } from '@/config';
import AddContentModal from './AddContentModal';
import useModalStore from '../store/useModalStore'

const Mainpage = () => {
  const [contents, setContents] = useState<any[]>([]);

  const authorization = localStorage.getItem("authorization")

  const getContent = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
            authorization: authorization
        }
    })

    setContents(res.data.content);
  }

  useEffect(() => {
    getContent();
  }, []);

  const contentGrid = contents.map(c => {
    return(
        <Card
            key={c._id}
            title={c.title}
            link={c.link}
            description={c.description}
        />
    )
  })

  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <div className='relative'>
      <Header />
      <div className='max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {contents.length == 0 ? (
            <p className='text-gray-500'>No content added yet!</p>
        ) : (
            contentGrid
        )}
      </div>
      {isOpen && <AddContentModal onContentAdded={getContent} />}
    </div>
  )
}

export default Mainpage
