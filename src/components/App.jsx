import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';

import css from '../components/App.module.css';

const App = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.contact__form}>
        <h1>PhoneBook</h1>
        <ContactForm />
      </div>
      <div className={css.contact}>
        <h2>Contacts</h2>
        <Filter />
        {<ContactList />}
      </div>
    </div>
  );
};
export default App;
