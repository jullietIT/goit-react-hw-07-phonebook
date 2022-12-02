import { useState } from 'react';
import { WrapperForm, Label, Input, Button, Title } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
// Импортируем генератор экшена
import { addContacts } from '../../redux/contactsSlice';

export const ContactForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const contacts = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts(name, number));
    }
    setName('');
    setNumber('');
  };

  return (
    <WrapperForm>
      <Title>Phonebook</Title>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя должно состоять из букв, заглавных"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleChange}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </form>
    </WrapperForm>
  );
};
