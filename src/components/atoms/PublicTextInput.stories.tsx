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
        value={'value가 있을 때'}
        placeholder={STRING.fillEmail}
        img={IMAGES.delete}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
