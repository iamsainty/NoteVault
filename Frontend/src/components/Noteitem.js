import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3 my-3" style={{maxWidth: '100%'}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note); }}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={() => { deletenote(note._id); }}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem