import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light" key={_id}>
      <div className="card__title">
        <h3 className="text-primary text-left">
          <i className="icon fas fa-user" />
          {name}{' '}
        </h3>
        <span
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <ul className="list">
        {email && (
          <li>
            <i className="icon fas fa-envelope-open" />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {phone && (
          <li>
            <i className="icon fas fa-phone" />
            <a href={`tel: ${phone}`}>{phone}</a>
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          type="button"
          title="Edit this contact"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={onDelete}
          title="Delete this contact"
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
