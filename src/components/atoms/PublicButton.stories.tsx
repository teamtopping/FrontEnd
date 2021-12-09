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
      <PublicButton
        buttonStyle={styles.button1}
        textStyle={styles.buttonText1}
        text={'토핑업 시작'}
        onPressButton={action('onPress')}
      />
      <PublicButton
        buttonStyle={styles.button2}
        textStyle={styles.buttonText2}
        text={'회원가입'}
        onPressButton={action('onPress')}
      />
      <PublicButton
        buttonStyle={styles.button3}
        textStyle={styles.buttonText3}
        text={'재전송'}
        onPressButton={action('onPress')}
      />
      <PublicButton
        buttonStyle={styles.button2}
        textStyle={styles.buttonText2}
        text={'다음'}
        onPressButton={action('onPress')}
        disabled
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  button1: {
    backgroundColor: colors.MAIN,
    width: maxScale(320),
    height: maxScale(52),
  },
  buttonText1: {
    color: colors.FFF,
  },
  button2: {
    borderWidth: 1,
    borderColor: colors.GRAY05,
    width: maxScale(320),
    height: maxScale(52),
  },
  buttonText2: {
    color: colors.GRAY02,
  },
  button3: {
    borderWidth: 1,
    borderColor: colors.GRAY05,
    width: maxScale(240),
    height: maxScale(40),
  },
  buttonText3: {
    color: colors.GRAY03,
  },
});
