interface cardProps {
    key: number,
    title: string,
    link: string,
    description: string 
}

const Card = (props: cardProps) => {
  return (
    <div className='p-5 border border-gray-300 rounded-md w-sm mb-5'>
      <p className="text-2xl font-semibold text-gray-600 truncate">{props.title}</p>
      <div className="text-md text-indigo-600 mb-5 truncate">
        <a href={props.link} target="_blank">{props.link}</a>
      </div>
      <p className="text-md text-gray-500">{props.description}</p>
    </div>
  )
}

export default Card
