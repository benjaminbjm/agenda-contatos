// src/services/ContactService.js
const apiUrl = 'http://localhost:5000/contacts';

export const getContacts = async () => {
  const response = await fetch(apiUrl);
  return await response.json();
};

export const addContact = async (contact) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  });
  return await response.json();
};

export const updateContact = async (contact) => {
  const response = await fetch(`${apiUrl}/${contact.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  });
  return await response.json();
};

export const deleteContact = async (id) => {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
};
