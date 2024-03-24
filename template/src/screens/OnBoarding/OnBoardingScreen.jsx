import {Text, StyleSheet, View, useColorScheme} from 'react-native';
import React from 'react';
import {Fonts} from '../../theme/Fonts';
import ButtonComp from '../../components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../components/WrapperContainer';
import Colors from '../../theme/Colors';
import actions from '../../redux/actions';
import {setFirstTime} from '../../utils/utils';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';

const OnBoardingScreen = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {color: isDark ? Colors.secandory : Colors.primary},
          ]}>
          {strings.welcome}
        </Text>
        <ButtonComp
          btnText={strings.getStarted}
          onPress={() => {
            navigation.navigate(navigationStrings.COMMON_AUTH);
            setFirstTime(true).then(() => {
              actions.isFirstTime(true);
            });
          }}
        />
      </View>
    </WrapperContainer>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 40,
  },
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
    color: Colors.primary,
  },
});
