import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import OnBoardingPage from './OnboardingPage';

storiesOf('components|pages', module)
  .addDecorator(withKnobs)
  .add('OnBoardingPage', () => (
    <View style={styles.container}>
      <OnBoardingPage />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
