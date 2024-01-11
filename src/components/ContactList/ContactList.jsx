import PropTypes from 'prop-types';
import {
  ContactItems,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

function ContactItem({ contact: { id, name, number }, deleteContact }) {
  return (
    <ContactItems>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItems>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;