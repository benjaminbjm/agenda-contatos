// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';

const ContactForm = ({ onAdd, onUpdate, currentContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (currentContact) setContact(currentContact);
  }, [currentContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentContact ? onUpdate(contact) : onAdd(contact);
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">{currentContact ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ContactForm;
