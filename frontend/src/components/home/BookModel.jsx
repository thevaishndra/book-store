import { useState } from 'react';
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { useSnackbar } from 'notistack'

const BookModel = ({book, onClose}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [review, setReview] = useState("")
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleChange = (event) => {
    setReview(event.target.value)
  }

  const handleSave = () => {
    enqueueSnackbar("Review saved succesfully", {variant : "success"});
    setIsEditing(false);
  }

  const handleDelete = () => {
    enqueueSnackbar("Review deleted", {variant : "error"});
    setReview("");
    setIsEditing(false);
  }

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0
     right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white
        rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2>{book.author}</h2>
        </div>

        <div className="mt-4 p-3 border rounded-lg bg-gray-100 flex flex-col h-[150px] relative">
          <div className="absolute top-2 right-2 flex gap-2">
            

            <AiOutlineDelete 
            className="text-gray-600 cursor-pointer hover:text-red-500" 
            onClick={handleDelete} />
          </div>

          {isEditing ? (
            <textarea
            className='w-full flex-grow p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none'
            value={review}
            onChange={handleChange}
            autoFocus />
          ) : (
            <p
              className={`flex-grow text-sm overflow-auto ${review ? "text-gray-700" : "text-gray-400 italic"}`}
              onClick={handleEdit}
            >{review || "Your thoughts about this book"}</p>
          )}

          {isEditing && (
            <div className='flex justify-end mt-2'>
              <button variant="contained" color="primary" onClick={handleSave} >
                Save
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default BookModel