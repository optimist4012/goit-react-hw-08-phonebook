import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Text, UserMenuWrapper } from './UserMenu.styled';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <Text>{user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </UserMenuWrapper>
  );
};
