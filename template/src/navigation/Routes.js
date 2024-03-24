import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from './AuthScreen';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();
export default function Routes() {
  const user = useSelector(state => state.auth);
  const {isFirstTime} = useSelector(state => state.appSetting);
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {user?.userData ? (
          <>{MainStack(Stack, isDark)}</>
        ) : (
          <>{AuthScreen(Stack, isFirstTime, isDark)}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
