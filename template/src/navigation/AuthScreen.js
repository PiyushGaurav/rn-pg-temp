import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  AppSetting,
  CommonAuth,
  ForgotPassword,
  Login,
  OnBoarding,
  Signup,
} from '../screens';
import CommonStyles from '../theme/CommonStyles';
import strings from '../constants/lang';
import Colors from '../theme/Colors';
import {useSelector} from 'react-redux';

export default function (Stack, isFirstTime, isDark) {
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
      {!isFirstTime && (
        <Stack.Screen
          name={navigationStrings.ON_BOARDING}
          component={OnBoarding}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name={navigationStrings.COMMON_AUTH}
        component={CommonAuth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{
          headerShown: true,
          title: strings.login,
          ...screensOptions,
        }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{...screensOptions, headerShown: true, title: strings.signup}}
      />
      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{
          ...screensOptions,
          headerShown: true,
          title: strings.forgotPassword,
        }}
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
