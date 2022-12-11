import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name: targetName, value } }) => {
    switch (targetName) {
      case 'name':
        setName(value);
        break;
      default:
        setNumber(value);
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    addUser({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={submitHandler}>
        <input
          className={css.input}
          onChange={handleChange}
          value={name}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          className={css.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.add}>Add contact</button>
      </form>
    </>
  );
};

ContactForm.popTypes = {
  handleChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};
