import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from '../theme/Fonts';
import Colors from '../theme/Colors';

export default function HeaderComp({title, headerStyle}) {
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    minHeight: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
  },
  textStyle: {
    fontFamily: Fonts.medium(16),
    color: Colors.secandory,
    textTransform: 'uppercase',
  },
});
