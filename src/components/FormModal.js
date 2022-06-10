import React from 'react';
import { MdClose } from 'react-icons/md';

const FormModal = ({
  handleAdd,
  handleToggle,
  handleInputTitle,
  handleInputBody,
  inputTitleText,
  inputBodyText,
  maxTitleText
}) => {
  return (
    <div className="modal-wrapper">
      <div onClick={() => handleToggle(false)} className="modal-backdrop" />
      <div className="modal-box">
        <div className="modal-header">
          <h2>Add Note</h2>
          <MdClose size="1.5em" onClick={() => handleToggle(false)} />
        </div>
        <form className="form" onSubmit={handleAdd}>
          <div className="label-header">
            <label>Title</label>
            <small>({maxTitleText} characters left)</small>
          </div>
          <input
            className="form-field"
            type="text"
            value={inputTitleText}
            placeholder="Title"
            onChange={handleInputTitle}
            required
          />
          <label>Note</label>
          <textarea
            className="form-field"
            type="text"
            value={inputBodyText}
            placeholder="Add your note..."
            onChange={(event) => handleInputBody(event.target.value)}
            required
          />
          <button className="form-field" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
