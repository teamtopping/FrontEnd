import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import RegisterTemplate from './RegisterTemplate';

storiesOf('components|templates', module)
  .addDecorator(withKnobs)
  .add('RegisterTemplate', () => (
    <View style={styles.container}>
      <RegisterTemplate />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
