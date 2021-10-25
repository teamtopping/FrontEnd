import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useRef} from 'react';
import AuthStackNavigator, {AuthStackParamsList} from './AuthNavigator';
import TrunkStackNavigator, {TrunkStackParamsList} from './TrunkStackNavigator';
import {navigationRef} from './constants/navigationOptions';
import {navigatorName} from './constants/screenName';

export type RootStackParamsList = {
  [navigatorName.AuthStack]: NavigatorScreenParams<AuthStackParamsList>;
  [navigatorName.TrunkStack]: NavigatorScreenParams<TrunkStackParamsList>;
};

const RootReduxNavigator = () => {
  const routeNameRef = useRef<string>();

  const navigationStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      // The line below uses the expo-firebase-analytics tracker
      // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
      // Change this line to use another Mobile analytics SDK
      // analytics().logScreenView({
      //   screen_name: currentRouteName,
      //   screen_class: currentRouteName,
      // });
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;
  }, []);

  const RootStack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={navigationStateChange}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={navigatorName.AuthStack}
          component={AuthStackNavigator}
        />
        <RootStack.Screen
          name={navigatorName.TrunkStack}
          component={TrunkStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootReduxNavigator.displayName = 'RootReduxNavigator';

export default RootReduxNavigator;
