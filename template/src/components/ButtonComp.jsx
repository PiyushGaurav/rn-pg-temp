import React from 'react';
import {Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import CommonStyles, {hitSlopProp} from '../theme/CommonStyles';
import Colors from '../theme/Colors';
import {Fonts} from '../theme/Fonts';

const ButtonComp = ({
  onPress = () => {},
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={[
        {...styles.btnStyle, ...btnStyle},
        {backgroundColor: isDark ? Colors.secandory : Colors.primary},
      ]}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        style={[
          {...styles.btnTextStyle, ...btnTextStyle},
          {color: isDark ? Colors.primary : Colors.secandory},
        ]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    ...CommonStyles.shadowStyle,
    margin: 16,
    height: 40,
  },
  btnTextStyle: {
    textTransform: 'uppercase',
    color: Colors.secandory,
    padding: 10,
    ...Fonts.bold(14),
  },
});

export default ButtonComp;
