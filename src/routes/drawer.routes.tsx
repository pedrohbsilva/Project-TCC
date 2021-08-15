/* eslint-disable react/jsx-props-no-spreading */
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { DrawerParamList } from '../../types';
import DrawerCustom from '../components/DrawerContent';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerRoutes = (): React.ReactElement => {
  const [progressInfo, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0),
  );

  const scale = Animated.interpolateNode(progressInfo, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progressInfo, {
    inputRange: [0, 1],
    outputRange: [1, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#61cf7e',
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        screenOptions={{ headerShown: false }}
        drawerContent={({
          descriptors,
          navigation,
          progress,
          state,
          activeBackgroundColor,
          activeTintColor,
          contentContainerStyle,
          inactiveBackgroundColor,
          inactiveTintColor,
          itemStyle,
          labelStyle,
          style,
        }) => {
          const props = {
            descriptors,
            navigation,
            progress,
            state,
            activeBackgroundColor,
            activeTintColor,
            contentContainerStyle,
            inactiveBackgroundColor,
            inactiveTintColor,
            itemStyle,
            labelStyle,
            style,
          };
          setTimeout(() => {
            setProgress(progress);
          }, 0);

          return <DrawerCustom {...props} />;
        }}
      >
        <Drawer.Screen name="Home">
          {props => <Home {...props} drawerAnimationStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerRoutes;
