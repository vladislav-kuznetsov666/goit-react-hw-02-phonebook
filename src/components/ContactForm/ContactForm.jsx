import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Text } from './ContactForm.styled';

function ContactForm({ addContact, contacts }) {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContactByName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContactByName) {
      alert('Contact with this name already exists!');
      return;
    }

    const existingContactByNumber = contacts.find(
      contact => contact.number === number.trim()
    );

    if (existingContactByNumber) {
      alert('Contact with this number already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setFormData({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={formData.number}
        onChange={handleInputChange}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

export default ContactForm;