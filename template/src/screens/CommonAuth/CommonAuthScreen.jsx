/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonStyles from '../../theme/CommonStyles';
import {Fonts} from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import WrapperContainer from '../../components/WrapperContainer';
import ButtonComp from '../../components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';

const CommonAuthScreen = ({navigation}) => {
  const {isDark, lang} = useSelector(state => state.appSetting);

  const goToScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <WrapperContainer>
      <TouchableOpacity
        style={styles.settingContainer}
        onPress={() => navigation.navigate(navigationStrings.APP_SETTINGS)}>
        <Text
          style={[
            styles.setting,
            {color: isDark ? Colors.secandory : Colors.primary},
          ]}>
          {strings.settings}
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {
              color: isDark ? Colors.secandory : Colors.primary,
            },
          ]}>
          {strings.welcome}
        </Text>
        <View>
          <ButtonComp
            btnText={strings.login}
            onPress={() => goToScreen(navigationStrings.LOGIN)}
          />
          <ButtonComp
            btnText={strings.signup}
            onPress={() => goToScreen(navigationStrings.SIGNUP)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {...CommonStyles.viewStyles, justifyContent: 'space-around'},
  heading: {
    ...Fonts.bold(24),
    color: Colors.primary,
  },
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
    color: Colors.primary,
  },
  settingContainer: {
    alignItems: 'flex-end',
  },
  setting: {
    ...Fonts.bold(14),
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});

export default CommonAuthScreen;
