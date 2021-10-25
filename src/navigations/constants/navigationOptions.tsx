import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ComponentType} from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: {[key: string]: unknown}) {
  navigationRef.current?.navigate(name, params);
}

// @TODO: Write proper Type interface for story navigator
interface StoryProps {
  name: string;
  component: ComponentType;
  params?: {[key: string]: unknown};
}

const StoryNavigator = (props: StoryProps) => {
  const Navigation = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigation.Navigator screenOptions={{headerShown: false}}>
        <Navigation.Screen
          name={props.name}
          component={props.component}
          initialParams={props.params}
        />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};

export default StoryNavigator;
