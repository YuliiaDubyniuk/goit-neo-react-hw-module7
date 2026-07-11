import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';

function App() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
