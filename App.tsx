import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import StackNavigationView from './src/components/molecules/StackNavigationView';
import RootReduxNavigator from '@navigations/RootNavigator';

const fullFlex = {
  flex: 1,
};

const StorybookUI = require('./storybook').default;

const EntryApp =
  process.env.STORYBOOK === 'true' ? (
    StorybookUI
  ) : (
    <StackNavigationView headerHeight={0}>
      <ActionSheetProvider>
        <RootReduxNavigator />
      </ActionSheetProvider>
    </StackNavigationView>
  );

const App = () => {
  useEffect(() => {
    SplashScreen.hide();

    if (process.env.STORYBOOK === 'true') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <View style={fullFlex}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {process.env.STORYBOOK === 'true' ? <StorybookUI /> : EntryApp}
      </SafeAreaProvider>
    </View>
  );
};

export default App;
