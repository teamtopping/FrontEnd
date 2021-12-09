import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {colors, maxScale} from '~/constants/theme';
import MainButton from './MainButton';

storiesOf('components|molecules', module)
  .addDecorator(withKnobs)
  .add('MainButton', () => (
    <View style={styles.container}>
      <MainButton title={'다음'} onPress={action('onPress')} />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
