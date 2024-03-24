import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useContext} from 'react';
import {Fonts} from '../../theme/Fonts';
import ButtonComp from '../../components/ButtonComp';
import WrapperContainer from '../../components/WrapperContainer';
import Colors from '../../theme/Colors';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';
import navigationStrings from '../../constants/navigationStrings';

const ProfileScreen = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';

  const onLogout = () => {
    actions.logout();
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
      <Text
        style={[
          styles.title,
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}>
        {strings.profile}
      </Text>

      <View style={styles.footerContainer}>
        <ButtonComp btnText={strings.logout} onPress={onLogout} />
      </View>
    </WrapperContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 0,
  },
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
  },
  sectionTitle: {
    ...Fonts.medium(18),
    textAlign: 'center',
    marginVertical: 40,
  },
  textStyle: {
    ...Fonts.medium(16),
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
