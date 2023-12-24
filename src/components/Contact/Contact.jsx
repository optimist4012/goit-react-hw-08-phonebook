import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ListItem } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem divider={true}>
      <p>
        {name}: {number}
      </p>
      <Tooltip title="Delete">
        <IconButton onClick={() => dispatch(deleteContact(id))}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};
