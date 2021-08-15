import * as React from 'react';
import { Image } from 'react-native';
import { Header, Left, Center, Right } from './styles';
import Logo from '../../assets/logo.png';
import MenuIcon from '../Menu';

const HeaderComponent = (): React.ReactElement => {
  return (
    <Header>
      <Left>
        <MenuIcon />
      </Left>
      <Center>
        <Image source={Logo} style={{ height: 52, width: 200 }} />
      </Center>
      <Right />
    </Header>
  );
};
export default HeaderComponent;
