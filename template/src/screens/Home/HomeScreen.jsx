import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {useSelector} from 'react-redux';
import {Fonts} from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import strings from '../../constants/lang';
import {showMessage, hideMessage} from 'react-native-flash-message';

const HomeScreen = () => {
  const state = useSelector(state => state.auth);
  const {email} = state.userData;
  const isDark = useColorScheme() === 'dark';

  useEffect(() => {
    showMessage({
      message: 'Welcome! Logged in successfully',
      type: 'info',
    });
  }, [email]);
  return (
    <WrapperContainer>
      <Text
        style={[
          styles.title,
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}>
        {strings.home}
      </Text>
      <Text style={{color: isDark ? Colors.secandory : Colors.primary}}>
        {email}
      </Text>
    </WrapperContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
    color: Colors.primary,
  },
});
