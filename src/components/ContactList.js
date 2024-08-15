// src/components/ContactList.js
import React from 'react';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <button onClick={() => onEdit(contact)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;