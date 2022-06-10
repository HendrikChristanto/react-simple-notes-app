import React from 'react';
import { MdDeleteForever, MdBookmark, MdBookmarkBorder } from 'react-icons/md';

const Note = ({ id, title, body, archived, createdAt, handleDelete, handleArchive }) => {
  return (
    <div className="note">
      <div className="note-main">
        <div className="note-header">
          <div className="note-title">{title}</div>
        </div>
        <div className="note-description">{body}</div>
      </div>
      <div className="note-footer">
        <small className="note-date">{createdAt}</small>
        <div className="note-action">
          {archived ? (
            <MdBookmark
              onClick={() => {
                handleArchive(id);
              }}
              className="mark-icon"
              size="1.5em"
            />
          ) : (
            <MdBookmarkBorder
              onClick={() => {
                handleArchive(id);
              }}
              className="mark-icon"
              size="1.5em"
            />
          )}
          <MdDeleteForever
            onClick={() => {
              handleDelete(id);
            }}
            className="delete-icon"
            size="1.5em"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
