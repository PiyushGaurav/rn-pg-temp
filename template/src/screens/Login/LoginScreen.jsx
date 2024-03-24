import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import ButtonComp from '../../components/ButtonComp';
import actions from '../../redux/actions';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import {Fonts} from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import navigationStrings from '../../constants/navigationStrings';
import {setUserData} from '../../utils/utils';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDark = useColorScheme() === 'dark';

  const onLogin = () => {
    const user = {
      email,
      password,
    };
    if (email === '' || password === '') {
      showMessage({
        message: 'Email/Password cannot be empty!',
        type: 'danger',
      });

      return;
    }
    setUserData(user);
    actions.login(user);
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <TextInputWithLabel
          placeholder={strings.email}
          label={strings.email}
          onChangeText={text => setEmail(text)}
        />
        <TextInputWithLabel
          placeholder={strings.password}
          label={strings.password}
          onChangeText={text => setPassword(text)}
        />
        <Text
          style={[
            styles.forgotText,
            {color: isDark ? Colors.secandory : Colors.pallete9},
          ]}
          onPress={() => {
            navigation.navigate(navigationStrings.FORGOT_PASSWORD);
          }}>
          {strings.forgotPassword}
        </Text>
        <ButtonComp btnText={strings.login} onPress={onLogin} />
      </View>
    </WrapperContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotText: {
    textAlign: 'right',
    marginRight: 16,
    ...Fonts.medium(14),
    color: Colors.pallete9,
  },
});
