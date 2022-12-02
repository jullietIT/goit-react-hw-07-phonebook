import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Wrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts); /// рендер пошуку якщо є данні
  return (
    <>
      <Wrapper>
        <ContactForm />

        {!!contacts.length && ( /// рендер пошуку якщо є данні
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Wrapper>
    </>
  );
}
