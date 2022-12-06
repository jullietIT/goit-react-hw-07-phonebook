import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Wrapper } from './App.styled';


export default function App() {

  return (
    <>
      <Wrapper>
        <ContactForm />
      <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
}
