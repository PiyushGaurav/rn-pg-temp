import React from 'react';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import {AppSetting} from '../screens';
import Colors from '../theme/Colors';

export default function (Stack, isDark) {
  const screensOptions = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: isDark ? Colors.secandory : Colors.primary,
    },
    headerTintColor: isDark ? Colors.primary : Colors.secandory,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.APP_SETTINGS}
        component={AppSetting}
        options={{
          headerShown: false,
          presentation: 'modal',
          ...screensOptions,
        }}
      />
    </>
  );
}
