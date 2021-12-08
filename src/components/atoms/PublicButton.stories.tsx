import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, maxScale} from '~/constants/theme';
import PublicButton from './PublicButton';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicButton', () => (
    <View style={styles.container}>
      {/* 기본 버튼 - disabled */}
      <PublicButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        title={'disabled'}
        onPress={action('onPress')}
        disabled
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.GRAY05,
    width: maxScale(320),
  },
  buttonText: {
    color: colors.GRAY02,
  },
});
