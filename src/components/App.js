import { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'First Note!',
      body: 'This is my first note!',
      archived: false,
      createdAt: '2022-06-06T20:41:47.560Z'
    },
    {
      id: nanoid(),
      title: 'Second Note!',
      body: 'This is my second note!',
      archived: false,
      createdAt: '2022-06-06T20:42:35.000Z'
    },
    {
      id: nanoid(),
      title: 'Third Note!',
      body: 'This is my third note!',
      archived: false,
      createdAt: '2022-06-06T20:42:51.145Z'
    },
    {
      id: nanoid(),
      title: 'Forth Note!',
      body: 'This is my forth note!',
      archived: true,
      createdAt: '2022-06-06T20:43:05.542Z'
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [isModalOpen, setModalOpen] = useState(false);

  const [inputTitleText, setInputTitleText] = useState('');
  const [inputBodyText, setInputBodyText] = useState('');

  const [maxTitleText, setMaxTitleText] = useState(50);

  const handleInputTitle = (event) => {
    if (event.target.value.length <= 50) {
      const newText = event.target.value;
      const textLength = 50 - newText.length;
      setInputTitleText(newText);
      setMaxTitleText(textLength);
    } else {
      setInputTitleText(inputTitleText);
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const newNote = {
      id: nanoid(),
      title: inputTitleText,
      body: inputBodyText,
      archived: false,
      createdAt: new Date().toISOString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setModalOpen(false);
    setInputTitleText('');
    setInputBodyText('');
    setMaxTitleText(50);
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleArchive = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <>
      <Header handleToggle={setModalOpen} />
      <Main
        notes={notes}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        searchText={searchText}
        handleSearch={setSearchText}
        isModalOpen={isModalOpen}
        handleToggle={setModalOpen}
        handleInputTitle={handleInputTitle}
        handleInputBody={setInputBodyText}
        inputTitleText={inputTitleText}
        inputBodyText={inputBodyText}
        maxTitleText={maxTitleText}
      />
      <Footer />
    </>
  );
};

export default App;
