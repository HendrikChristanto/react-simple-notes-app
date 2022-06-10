import NotesList from './NotesList';
import Search from './Search.js';
import FormModal from './FormModal.js';

const Main = ({
  notes,
  handleAdd,
  handleDelete,
  handleArchive,
  searchText,
  handleSearch,
  isModalOpen,
  handleToggle,
  handleInputTitle,
  handleInputBody,
  inputTitleText,
  inputBodyText,
  maxTitleText
}) => {
  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <h2>Not Archived</h2>
      <NotesList
        notes={notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()) && !note.archived)}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
      />
      <h2>Archived</h2>
      <NotesList
        notes={notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()) && note.archived)}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
      />
      {isModalOpen ? (
        <FormModal
          handleAdd={handleAdd}
          handleToggle={handleToggle}
          handleInputTitle={handleInputTitle}
          handleInputBody={handleInputBody}
          inputTitleText={inputTitleText}
          inputBodyText={inputBodyText}
          maxTitleText={maxTitleText}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
