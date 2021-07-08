import { connect } from 'react-redux';

import contactsAction from 'redux/contacts/contacts-actions';
import ElementContactList from './ElementContactList';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementContactList);
