import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link
        to={destination}
        className='bg-sky-800 text-white px-4  py-1 rounded-lgw-fit'>
            <BsArrowLeft className='textx-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton