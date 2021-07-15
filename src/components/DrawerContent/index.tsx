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
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://gravatar.com/avatar/fe4ed298cf27be4912740be16b60b407?s=400&d=robohash&r=x',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <TitlePaper>{user.name}</TitlePaper>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{ marginBottom: 15, borderColor: '#f4f4f4', borderWidth: 1 }}
      >
        <DrawerItem
          icon={({ color, size }) => (
            <Feather name="log-out" size={size} color={color} />
          )}
          label="Sair"
          onPress={() => signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerCustom;
