import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Colors from '../theme/Colors';
import {Fonts} from '../theme/Fonts';
import {useColorScheme} from 'react-native';

function FlashMessageView() {
  const isDark = useColorScheme() === 'dark';
  return (
    <FlashMessage
      titleStyle={{
        marginRight: 5,
        ...Fonts.medium(16),
        color: isDark ? Colors.primary : Colors.secandory,
      }}
      style={{
        backgroundColor: isDark ? Colors.secandory : Colors.primary,
      }}
      position="top"
    />
  );
}

export default FlashMessageView;
