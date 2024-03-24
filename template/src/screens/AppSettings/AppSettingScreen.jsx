/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';
import Colors from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';
import Separator from '../../components/Separator';

export default function AppSettingScreen() {
  const {lang} = useSelector(state => state.appSetting);
  const isDark = useColorScheme() === 'dark';
  return (
    <View
      style={[
        styles.modalContainer,
        {backgroundColor: isDark ? Colors.pallete8 : Colors.pallete4},
      ]}>
      <Text
        style={[
          styles.settingTitle,
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}>
        {strings.appSettings}
      </Text>
      <Separator />
      <Text
        style={[
          styles.settingName,
          {color: isDark ? Colors.white : Colors.black},
        ]}>
        {strings.chooseLang}
      </Text>
      <Text
        style={[
          styles.settingOption,
          lang === 'english'
            ? {
                color: isDark ? Colors.secandory : Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: isDark ? Colors.white : Colors.black,
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
                color: isDark ? Colors.secandory : Colors.primary,
                textDecorationLine: 'underline',
              }
            : {
                color: isDark ? Colors.white : Colors.black,
              },
        ]}
        onPress={() => {
          actions.updateLang('hindi');
        }}>
        {strings.hindi}
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
    height: '100%',
  },
  settingTitle: {
    ...Fonts.regular(50),
    color: Colors.primary,
  },
  settingName: {
    ...Fonts.medium(18),
    color: Colors.black,
    marginVertical: 10,
  },
  settingOption: {
    ...Fonts.regular(14),
    color: Colors.black,
    marginVertical: 3,
  },
});
