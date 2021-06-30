import React from 'react';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="Whats happened today?"
          className="notes__textarea"
        >
        </textarea>
        <div
          className="notes__image"
        >
          <img
            src="https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg"
            alt="Heaven sun"
          />
        </div>
      </div>
    </div>
  )
}
