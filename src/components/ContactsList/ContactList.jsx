import { nanoid } from '@reduxjs/toolkit';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getFilter, getIsLoading } from 'Redux/selectors';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import authOperations from 'Redux/auth/auth-operations';
import { number } from 'prop-types';



function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  error&&console.log(error);
  
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(authOperations.deleteContact(contactId));
  };


  useEffect(() => {
    dispatch(authOperations.getContacts());
  }, [dispatch]);


  const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts?.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
    const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {isLoading && <div className={css.Loader}><Loader /></div>}
      {visibleContacts?.map(({ id = nanoid(), name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.name}>{name}</p>
          <p className={css.phone}>{number}</p>
          <button className={css.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;