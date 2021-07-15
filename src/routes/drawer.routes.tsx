/* eslint-disable react/jsx-props-no-spreading */
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import {
  DrawerParamList,
  DashboardParamList,
  HomeParamList,
} from '../../types';
import DrawerCustom from '../components/DrawerContent';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator<DrawerParamList>();
const HomeStack = createStackNavigator<HomeParamList>();

function homeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
        component={Home}
      />
    </HomeStack.Navigator>
  );
}

const DrawerRoutes = (): React.ReactElement => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={homeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
