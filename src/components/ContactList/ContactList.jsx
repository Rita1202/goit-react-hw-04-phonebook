import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, deleteUser }) => {
  const filteredList = () => {
    const filtered = filter.toLowerCase();
    return contacts.filter(el => el.name.toLowerCase().includes(filtered));
  };

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

  const fiteredList = () => {
    return filteredList().map(({ id, number, name }) => {
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
      <ul className={css.list}>{!filter ? fullList() : fiteredList()}</ul>
    </>
  );
};

ContactList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
