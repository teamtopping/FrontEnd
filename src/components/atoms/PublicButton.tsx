import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ButtonProps,
} from 'react-native';
import {colors, maxScale} from '~/constants/theme';

export interface Props extends ButtonProps {
  buttonStyle: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const PublicButton = ({disabled = false, ...props}: Props) => {
  const buttonStyle = useMemo(
    (): ViewStyle => ({
      ...props.buttonStyle,
      opacity: disabled ? 1 : undefined,
      backgroundColor: disabled ? colors.GRAY05 : colors.MAIN,
    }),
    [disabled, props.buttonStyle],
  );
  const textStyle = useMemo(
    (): TextStyle => ({
      ...props.textStyle,
      color: disabled ? colors.GRAY04 : colors.FFF,
    }),
    [disabled, props.textStyle],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[buttonStyle, styles.button]}
        disabled={disabled}
        onPress={props.onPress}>
        <Text style={[textStyle, styles.text]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PublicButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    height: maxScale(52),
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: maxScale(14),
    lineHeight: maxScale(20),
  },
});
