import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/users/userSlice'; // Adjust the path accordingly

const UserList = () => {
  const dispatch = useDispatch();
  const { users, error, isLoading } = useSelector((state) => state.user); // Access the 'user' slice

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  
  const renderUser = () => {
    return users.map((user) => (
      <li key={user.login.uuid}>
        {user.name.title}. {user.name.first} {user.name.last}
      </li>
    ));
  };
  
  return (
    <div>
      {isLoading && <div className="loader"></div>}
      {error && <div className="error">{error}</div>}
      <ul>{renderUser()}</ul>
    </div>
  );
};

export default UserList;

