import { List } from '@mui/material';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getVisibleContacts);
  return (
    <>
      <List>
        {filteredContacts.map(item => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
};
