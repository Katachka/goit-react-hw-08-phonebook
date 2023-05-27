import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations/contactsThunk';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  ContactsContainer,
  Item,
  Wrapper,
  Icon,
  Number,
  Button,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <ContactsContainer>
        {contacts.map(item => (
          <Item key={item.id}>
            <Wrapper>
              <Icon>
                <FaUserAlt />
              </Icon>
              <p>{item.name}</p>
            </Wrapper>

            <Wrapper>
              <Number>{item.number}</Number>
              <Button
                type="button"
                onClick={() => dispatch(deleteContactThunk(item.id))}
              >
                <FaTrash />
              </Button>
            </Wrapper>
          </Item>
        ))}
      </ContactsContainer>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
