import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Onboarding from './Onboarding';

storiesOf('components|templates', module)
  .addDecorator(withKnobs)
  .add('Onboarding', () => (
    <View style={styles.container}>
      <Onboarding />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
