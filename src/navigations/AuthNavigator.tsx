import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthLoadingPage from '@components/pages/AuthLoadingPage';
import {screenName} from './constants/screenName';
export type AuthStackParamsList = {
  [screenName.AuthLoadingPage]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      defaultScreenOptions={{headerShown: false}}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        headerLeft: undefined,
      }}>
      <AuthStack.Screen
        name={screenName.AuthLoadingPage}
        component={AuthLoadingPage}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
