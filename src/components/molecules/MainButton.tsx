import React from 'react';
import {StyleSheet, ButtonProps, View} from 'react-native';
import PublicButton from '@components/atoms/PublicButton';
import {colors, maxScale} from '~/constants/theme';

interface Props extends ButtonProps {}

const MainButton = ({...props}: Props) => {
  return (
    <View style={styles.wrapper}>
      <PublicButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        {...props}
      />
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.FFF,
    width: '100%',
    height: maxScale(60),
    elevation: 5,
    marginBottom: maxScale(32),
  },
  button: {
    borderWidth: 2,
    borderColor: colors.GRAY01,
    backgroundColor: colors.MAIN,
    width: '98%',
  },
  buttonText: {
    color: colors.FFF,
  },
});
