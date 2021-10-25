import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '@components/pages/HomePage';
import {screenName} from '@navigations/constants/screenName';

export type TrunkStackParamsList = {
  [screenName.HomePage]: undefined;
};

const TrunkStack = createNativeStackNavigator<TrunkStackParamsList>();

const TrunkStackNavigator = () => {
  return (
    <TrunkStack.Navigator
      defaultScreenOptions={{headerShown: false}}
      screenOptions={{
        gestureEnabled: false,
        headerLeft: undefined,
      }}>
      <TrunkStack.Screen
        name={screenName.HomePage}
        component={HomePage}
        options={{headerShown: false, animation: 'fade'}}
      />
    </TrunkStack.Navigator>
  );
};

export default TrunkStackNavigator;
