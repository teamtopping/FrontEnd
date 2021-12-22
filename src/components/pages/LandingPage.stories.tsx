import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LandingPage from './LandingPage';

storiesOf('components|pages', module)
  .addDecorator(withKnobs)
  .add('LandingPage', () => (
    <View style={styles.container}>
      <LandingPage />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
