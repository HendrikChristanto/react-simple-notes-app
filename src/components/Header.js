import React from 'react';
import { MdAdd } from 'react-icons/md';

const Header = ({ handleToggle }) => {
  return (
    <div className="header">
      <h1>My Notes App</h1>
      <MdAdd
        onClick={() => {
          handleToggle(true);
        }}
        className="add-icon"
        size="1.2em"
      />
    </div>
  );
};

export default Header;
