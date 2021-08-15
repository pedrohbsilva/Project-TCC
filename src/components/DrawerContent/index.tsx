/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Feather from '@expo/vector-icons/Feather';
import { Drawer, Avatar } from 'react-native-paper';
import { useAuth } from '../../hooks/auth';
import { TitlePaper } from './styles';

const DrawerCustom = ({
  ...props
}: DrawerContentComponentProps): React.ReactElement => {
  const { signOut, user } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingLeft: 20, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Text
                label={user.name.substring(0, 1)}
                color="#61cf7e"
                size={50}
                style={{ backgroundColor: '#ebe694' }}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <TitlePaper>{user.name}</TitlePaper>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
            icon={() => <Feather name="home" size={20} color="#ffffff" />}
            label="Home"
            labelStyle={{ color: '#ffffff' }}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={{ marginBottom: 15 }}>
        <DrawerItem
          icon={() => <Feather name="log-out" size={20} color="#ffffff" />}
          label="Sair"
          labelStyle={{ color: '#ffffff' }}
          onPress={() => signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerCustom;
