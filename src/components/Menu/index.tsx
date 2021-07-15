import * as React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { onPressFunc } from '../../../types';

const MenuIcon = (): React.ReactElement => {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Feather name="menu" size={24} style={{ marginLeft: 25 }} />
    </TouchableOpacity>
  );
};
export default MenuIcon;
