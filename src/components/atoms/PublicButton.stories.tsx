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
      {/* 기본 버튼 */}
      <PublicButton
        wrapperStyle={styles.mainButtonWrapper}
        buttonStyle={styles.mainButton}
        textStyle={styles.mainButtonText}
        text={'다음'}
        onPressButton={action('onPress')}
      />
      {/* 기본 버튼 - disabled */}
      <PublicButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        text={'disabled'}
        onPressButton={action('onPress')}
        disabled
      />
      {/* 흰색 버튼 */}
      <PublicButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        text={'회원가입'}
        onPressButton={action('onPress')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  mainButtonWrapper: {
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.FFF,
    width: maxScale(320),
    height: maxScale(60),
    elevation: 5,
  },
  mainButton: {
    borderWidth: 2,
    borderColor: colors.GRAY01,
    backgroundColor: colors.MAIN,
    width: maxScale(312),
  },
  mainButtonText: {
    color: colors.FFF,
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
