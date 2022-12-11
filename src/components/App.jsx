import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import '../index.css';
import initialData from '../../src/initialData.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialData;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const addUser = data => {
    const repeat = contacts.find(el => {
      return el.name === data.name;
    });

    if (repeat) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newUser = {
        ...data,
        id: nanoid(),
      };
      setContacts(prev => [...prev, newUser]);
    }
  };

  const deleteUser = userToDelete => {
    setContacts(prev => prev.filter(el => el.id !== userToDelete.id));
  };

  return (
    <div className="main-wrapper">
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm addUser={addUser} />

      <h2 className="contacts">Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} contacts={contacts} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteUser={deleteUser}
      />
    </div>
  );
};
