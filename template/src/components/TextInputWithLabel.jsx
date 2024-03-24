import React from 'react';
import {View, Text, TextInput, StyleSheet, useColorScheme} from 'react-native';
import Colors from '../theme/Colors';
import {Fonts} from '../theme/Fonts';

const TextInputWithLabel = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  label,
  ...props
}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.labelText,
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}>
        {label}{' '}
      </Text>
      <TextInput
        style={[
          {...styles.inputStyle},
          {borderColor: isDark ? Colors.secandory : Colors.primary},
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  inputStyle: {
    ...Fonts.medium(14),
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  labelText: {
    ...Fonts.medium(16),
    marginBottom: 14,
    color: 'black',
  },
});

export default TextInputWithLabel;
