import Note from './Note.js';

const NotesList = ({ notes, handleDelete, handleArchive }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              archived={note.archived}
              createdAt={note.createdAt}
              handleDelete={handleDelete}
              handleArchive={handleArchive}
            />
          );
        })
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NotesList;
