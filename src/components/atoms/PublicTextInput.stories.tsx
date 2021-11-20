import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PublicTextInput from './PublicTextInput';
import {colors} from '~/constants/theme';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      <PublicTextInput
        editable={false}
        placeholder={'DISABLED'}
        onPressButton={action('onPressButton')}
      />
      <PublicTextInput
        placeholder={'DEFAULT'}
        onPressButton={action('onPressButton')}
      />
      <PublicTextInput
        validation={'error'}
        placeholder={'DEFAULT'}
        onPressButton={action('onPressButton')}
      />
      <PublicTextInput
        validation={'success'}
        placeholder={'DEFAULT'}
        onPressButton={action('onPressButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
