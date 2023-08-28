import css from '../components/App.module.css';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactsList';
import Filter from '../components/Filter';

function ContactsPage() {
  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
