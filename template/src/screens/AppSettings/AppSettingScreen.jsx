/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';
import Colors from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';

export default function AppSettingScreen() {
  const {isDark, lang} = useSelector(state => state.appSetting);

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.settingTitle}>{strings.appSettings}</Text>
      <Text style={styles.settingName}>{strings.chooseLang}</Text>
      <Text
        style={[
          styles.settingOption,
          lang === 'english'
            ? {
                color: Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: Colors.black,
              },
        ]}
        onPress={() => {
          actions.updateLang('english');
        }}>
        {strings.english}
      </Text>
      <Text
        style={[
          styles.settingOption,
          lang === 'hindi'
            ? {
                color: Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: Colors.black,
              },
        ]}
        onPress={() => {
          actions.updateLang('hindi');
        }}>
        {strings.hindi}
      </Text>
      <Text style={styles.settingName}>{strings.chooseTheme}</Text>
      <Text
        style={[
          styles.settingOption,
          isDark
            ? {
                color: Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: Colors.secondary,
              },
        ]}
        onPress={() => {
          actions.updateTheme(true);
        }}>
        {strings.dark}
      </Text>
      <Text
        style={[
          styles.settingOption,
          !isDark
            ? {
                color: Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: Colors.black,
              },
          ,
        ]}
        onPress={() => {
          actions.updateTheme(false);
        }}>
        {strings.light}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  settingTitle: {
    ...Fonts.bold(30),
    color: Colors.primary,
  },
  settingName: {
    ...Fonts.medium(20),
    color: Colors.black,
    marginVertical: 10,
  },
  settingOption: {
    ...Fonts.regular(14),
    color: Colors.black,
    marginVertical: 3,
  },
});
