import React from 'react';
import {View, StyleSheet, useColorScheme, Text} from 'react-native';
import Colors from '../theme/Colors';

const Separator = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View
      styles={[
        styles.sep,
        {
          width: 300,
          height: 10,
          color: 'red',
          backgroundColor: isDark ? Colors.secandory : Colors.primary,
        },
      ]}></View>
  );
};
const styles = StyleSheet.create({
  sep: {
    width: 100,
    height: 10,
  },
});

export default Separator;
