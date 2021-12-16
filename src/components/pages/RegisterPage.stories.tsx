import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import RegisterPage from './RegisterPage';

storiesOf('components|pages', module)
  .addDecorator(withKnobs)
  .add('RegisterPage', () => (
    <View style={styles.container}>
      <RegisterPage />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
