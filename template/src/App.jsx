import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import actions from './redux/actions';
import {saveUserData} from './redux/reducers/auth';
import store from './redux/store';
import {getFirstTime, getUserData} from './utils/utils';
import Routes from './navigation/Routes';
import FlashMessageView from './components/FlashMessageView';
import {useColorScheme} from 'react-native';

const {dispatch} = store;

const App = () => {
  const init = async () => {
    try {
      const isFirstTime = await getFirstTime();
      const userData = await getUserData();
      if (!!isFirstTime) {
        actions.updateFirstTime(true);
      }
      if (userData && !!userData) {
        dispatch(saveUserData(userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  });

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessageView />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
