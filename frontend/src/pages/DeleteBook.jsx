import React, {useState} from 'react'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = navigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert("An error happened, Check console")
      console.log(error)
    });
  };

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto w-[600px]'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full'>Yes, delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook