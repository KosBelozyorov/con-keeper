import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contentContext = useContext(ContactContext);
  const text = useRef('');

  const {
    filterContacts,
    filterContactsByType,
    clearFilter,
    filtered,
  } = contentContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  const onClick = e => {
    filterContactsByType(e.target.value);
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Search by name or email..."
        onChange={onChange}
      />
      <h5>Filter contacts by type:</h5>
      <input
        type="button"
        value="Personal"
        className="btn"
        onClick={onClick}
        title="Filter contacts by type 'Personal'"
      />
      <input
        type="button"
        value="Professional"
        className="btn"
        onClick={onClick}
        title="Filter contacts by type 'Professional'"
      />
      {filtered && (
        <input
          className="btn btn-light btn-block"
          type="submit"
          value="Reset filter"
          onClick={clearFilter}
        />
      )}
    </form>
  );
};

export default ContactFilter;
