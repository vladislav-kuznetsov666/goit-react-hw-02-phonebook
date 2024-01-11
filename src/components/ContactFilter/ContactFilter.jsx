import { Input } from './ContactFilter.styled';

const ContactFilter = ({ filter, setFilter }) => (
  <Input
    type="text"
    name="filter"
    placeholder="Search by name"
    value={filter}
    onChange={event => setFilter(event.target.value)}
  />
);

export default ContactFilter;