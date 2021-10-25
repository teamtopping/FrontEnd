// import { AppRegistry } from 'react-native';
import url from 'url';
import AsyncStorage from '@react-native-community/async-storage';
import {getStorybookUI, configure} from '@storybook/react-native';
import {NativeModules} from 'react-native';
import {loadStories} from './storyLoader';

const {hostname} = url.parse(NativeModules.SourceCode.scriptURL || '');

import './rn-addons';

// import stories
configure(() => {
  loadStories();
  require('../src/navigations/RootNavigator.rootstories');
}, module);

console.log('=====Storybook configured=====');
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
console.log('hostname', hostname);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  host: hostname as string,
  onDeviceUI: true,
  resetStorybook: true,
  shouldPersistSelection: true,
  shouldDisableKeyboardAvoidingView: true,
  // isUIHidden: true,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
