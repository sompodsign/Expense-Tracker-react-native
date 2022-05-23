import * as React from 'react';
import { Avatar } from 'react-native-paper';

const UserAvatar = () => (
  <Avatar.Image size={40} source={require('../media/person.jpg')} />
);
export default UserAvatar
