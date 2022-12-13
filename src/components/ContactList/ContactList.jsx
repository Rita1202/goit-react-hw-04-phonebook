import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteUser }) => {
  const fullList = () => {
    return contacts.map(({ id, number, name }) => {
      return (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            className={css.delete}
            onClick={() => {
              deleteUser({ id, number, name });
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  return (
    <>
      <ul className={css.list}>{fullList()}</ul>
    </>
  );
};

ContactList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
