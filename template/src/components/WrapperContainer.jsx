import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../theme/Colors';
import {useSelector} from 'react-redux';

const WrapperContainer = ({
  children,
  statusBarColor = Colors.primary,
  barStyle = 'dark-content',
}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? Colors.primary : Colors.secandory},
      ]}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
  },
});

export default WrapperContainer;
