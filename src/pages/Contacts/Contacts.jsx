import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';
import { Title, Wrapper } from './Contacts.styled';
import LinearProgress from '@mui/material-next/LinearProgress';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Wrapper>
        <ContactForm />
        {isLoading && (
          <LinearProgress color="primary" variant="indeterminate" />
        )}
        {isError !== null && <p>Something went wrong </p>}

        {contacts.length > 0 && <Filter />}
      </Wrapper>
      <Title>Contacts:</Title>
      {contacts.length > 0 ? <ContactList /> : <p>There are no contacts</p>}
    </div>
  );
}
