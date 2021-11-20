import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {maxScale} from '~/constants/theme';
import PublicTextInput from './PublicTextInput';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      <PublicTextInput
        secureTextEntry
        placeholder={'비밀번호를 입력해주세요'}
        onPressButton={action('onPressButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: maxScale(20),
  },
});
