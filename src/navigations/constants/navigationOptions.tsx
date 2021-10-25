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
const Stack = createStackNavigator();

const StoryNavigator = (props: StoryProps) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name={props.name}
          component={props.component}
          initialParams={props.params}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StoryNavigator;
