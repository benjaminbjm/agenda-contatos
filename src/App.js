// src/App.js
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getContacts, addContact, updateContact, deleteContact } from './services/ContactService';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleAddContact = async (contact) => {
    await addContact(contact);
    loadContacts();
  };

  const handleUpdateContact = async (contact) => {
    await updateContact(contact);
    loadContacts();
    setCurrentContact(null);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    loadContacts();
  };

  const handleEditContact = (contact) => {
    setCurrentContact(contact);
  };

  return (
    <div>
      <h1>Agenda de Contatos</h1>
      <ContactForm onAdd={handleAddContact} onUpdate={handleUpdateContact} currentContact={currentContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />
    </div>
  );
};

export default App;