import ContactItem from '../ContactItem/ContactItem';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice/filterSelector';
import { getContacts } from '../../redux/contactSlice/contactsSelector';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contact__list}>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem name={name} number={number} id={id} key={id} />
      ))}
    </ul>
  );
};
export default ContactList;
