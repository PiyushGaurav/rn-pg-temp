import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {Fonts} from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';

const SearchScreen = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <WrapperContainer>
      <Text
        style={[
          styles.title,
          {color: isDark ? Colors.secandory : Colors.primary},
        ]}>
        {strings.search}
      </Text>
    </WrapperContainer>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  title: {
    ...Fonts.bold(34),
    textAlign: 'center',
    color: Colors.primary,
  },
});
