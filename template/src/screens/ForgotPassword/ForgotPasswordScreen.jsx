import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {Fonts} from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import strings from '../../constants/lang';

const ForgotPasswordScreen = () => {
  return (
    <WrapperContainer>
      <Text style={styles.title}>{strings.forgotPassword}</Text>
    </WrapperContainer>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
    color: Colors.primary,
  },
});
