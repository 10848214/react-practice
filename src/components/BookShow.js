import {useState} from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';
function BookShow({book}){
    const {deleteBookById} = useBooksContext
const [showEdit, setShowEdit] = useState(false);

     const handleEditClick = () =>{
        setShowEdit(!showEdit);


     };


    const handleDeleteClick = ()=>{
        deleteBookById(book.id);

    };

    const handleSubmit = ()=>{
        setShowEdit(false);
        

    };

    let content = <h3>{book.title}</h3>;
    if (showEdit){
        content = <BookEdit onSubmit={handleSubmit}  book = {book}/>;
    };



    return <div className="book-show">
        <img 
        alt = 'books'
        src = {`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{content}</div>
        <div className="actions">
            <button onClick = {handleEditClick} className='edit '>Edit</button>
            <button className="delete" onClick = {handleDeleteClick}>
                Delete
            </button>

        </div>
    </div>;
}

export default BookShow;