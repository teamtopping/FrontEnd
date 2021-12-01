import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IMAGES} from '~/constants/images';
import {STRING} from '~/constants/ko';
import RegisterInput from './RegisterInput';

storiesOf('components|molecules', module)
  .addDecorator(withKnobs)
  .add('RegisterInput', () => (
    <View style={styles.container}>
      <RegisterInput
        secureTextEntry
        placeholder={STRING.defaultPassInput}
        onPressIcon={action('onPressIcon')}
        icon={IMAGES.Preivew}
        onChangeText={action('이걸로 감시')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
