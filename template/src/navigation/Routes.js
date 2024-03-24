import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from './AuthScreen';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const user = useSelector(state => state.auth);
  const {isFirstTime, isDark} = useSelector(state => state.appSetting);
  return (
    <NavigationContainer>
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
