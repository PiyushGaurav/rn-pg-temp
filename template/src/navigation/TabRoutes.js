import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import Colors from '../theme/Colors';
import {Home, Search, Post, Notification, Profile} from '../screens';
import {Fonts} from '../theme/Fonts';
import {useSelector} from 'react-redux';

const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  const {isDark} = useSelector(state => state.appSetting);

  return (
    <BottomTab.Navigator
      tabBar={tabsProps => <BottomTabBar {...tabsProps} />}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: isDark ? Colors.primary : Colors.secandory,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          ...Fonts.medium(12),
        },
        tabBarStyle: {
          backgroundColor: isDark ? Colors.secandory : Colors.primary,
        },
      }}>
      <BottomTab.Screen name={navigationStrings.HOME} component={Home} />
      <BottomTab.Screen name={navigationStrings.SEARCH} component={Search} />
      <BottomTab.Screen name={navigationStrings.PROFILE} component={Profile} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    backgroundColor: Colors.primary,
  },
});

export default TabRoutes;
