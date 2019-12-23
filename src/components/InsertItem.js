import React, { useState } from 'react';
import uuid from 'uuid';

export default function InsertItem(props) {
  const [inputValue, setInputValue] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();

    if (inputValue && inputValue.length > 0) {
      const newItem = { id: uuid(), name: inputValue };
      props.onAddItem(newItem);
      setInputValue('');
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-5">
          <form className="form-inline mb-5" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="item" className="sr-only">
                Cart Item
              </label>
              <input
                type="text"
                className="form-control-plaintext"
                id="item"
                placeholder="Add cart item"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <button type="submit" className="btn btn-dark btn-block mt-2">
                Add New Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
