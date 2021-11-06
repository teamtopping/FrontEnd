import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PublicTextInput from './PublicTextInput';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      {/* 비밀번호 성공 */}
      <PublicTextInput
        secureTextEntry
        placeholder={'비밀번호 (8자 이상)'}
        onPressButton={action('onPressButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
