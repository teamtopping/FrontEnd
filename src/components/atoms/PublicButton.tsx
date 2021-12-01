import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, maxScale} from '~/constants/theme';

export interface Props {
  wrapperStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
  disabled?: boolean;
  onPressButton: () => void;
}

const PublicButton = ({disabled = false, ...props}: Props) => {
  const wrapperStyle = useMemo((): ViewStyle => {
    return disabled ? {} : {...props.wrapperStyle};
  }, [disabled, props.wrapperStyle]);
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
      <View style={[wrapperStyle]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[buttonStyle, styles.button]}
          disabled={disabled}>
          <Text style={[textStyle, styles.text]}>{props.text}</Text>
        </TouchableOpacity>
      </View>
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
