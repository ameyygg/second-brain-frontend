import Header from './Header'
import Card from './ui/Card'

const contents = [
    {
        "id": 1,
        "title": "gift guide for parents",
        "link": "https://www.cosmopolitan.com/lifestyle/g38393456/gift-ideas-for-parents/",
        "description": "gift guide for you parents so that you dont have to think a lot about it.",
        "tags": []
    },
    {
        "id": 2,
        "title": "clash of clans th10 attack strategy",
        "link": "https://www.coc.com",
        "description": "different attack strategy for th10",
        "tags": []
    },
    {
        "id": 3,
        "title": "clash of clans th10 attack strategy",
        "link": "https://www.coc.com",
        "description": "different attack strategy for th10",
        "tags": []
    },
    {
        "id": 4,
        "title": "clash of clans th10 attack strategy",
        "link": "https://www.coc.com",
        "description": "different attack strategy for th10",
        "tags": []
    },
    {
        "id": 5,
        "title": "clash of clans th10 attack strategy",
        "link": "https://www.coc.com",
        "description": "different attack strategy for th10",
        "tags": []
    },
    {
        "id": 6,
        "title": "clash of clans th10 attack strategy",
        "link": "https://www.coc.com",
        "description": "different attack strategy for th10",
        "tags": []
    }
]

const contentGrid = contents.map(c => {
    return (
        <Card
            key={c.id}
            title={c.title}
            link={c.link}
            description={c.description}
        />
    )
})

const Mainpage = () => {

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
      
    </div>
  )
}

export default Mainpage
