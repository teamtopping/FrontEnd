import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import OnboardingTemplate from './OnboardingTemplate';

storiesOf('components|templates', module)
  .addDecorator(withKnobs)
  .add('OnboardingTemplate', () => (
    <View style={styles.container}>
      <OnboardingTemplate />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
