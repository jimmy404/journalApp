import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const { active: note } = useSelector(state => state.notes);

  const [ formValues, handleInputChange, reset ] = useForm(note);

  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if( note.id !== activeId.current ) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Whats happened today?"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        >
        </textarea>
        {
          (note.url)
          && (
            <div
              className="notes__image"
            >
              <img
                src="https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg"
                alt="Heaven sun"
              />
            </div>
          )
        }
      </div>
    </div>
  )
}
