import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IMAGES} from '~/constants/images';
import {STRING} from '~/constants/ko';
import PublicTextInput from './PublicTextInput';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      <PublicTextInput
        secureTextEntry
        placeholder={STRING.defaultPassInput}
        onPressIcon={action('onPressIcon')}
        icon={IMAGES.Preivew}
        onChangeText={action('이걸로 감시')}
      />
      <PublicTextInput
        placeholder={STRING.checkPass}
        onPressIcon={action('onPressIcon')}
        icon={IMAGES.Private}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
