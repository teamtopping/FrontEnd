import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {maxScale} from '~/constants/theme';

export interface Props {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
  disabled?: boolean;
  onPressButton: () => void;
}

const PublicButton = ({disabled = false, ...props}: Props) => {
  const buttonStyle = useMemo((): ViewStyle => {
    return {
      ...props.buttonStyle,
      opacity: disabled ? 1 : undefined,
      backgroundColor: disabled ? '#D8D9DE' : props.buttonStyle.backgroundColor,
    };
  }, [disabled, props.buttonStyle]);

  const textStyle = useMemo((): TextStyle => {
    return {
      ...props.textStyle,
      color: disabled ? '#A5A7AB' : props.textStyle.color,
    };
  }, [disabled, props.textStyle]);
  return (
    <>
      <View style={[styles.container, props.containerStyle]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[buttonStyle, styles.button]}
          disabled={disabled}>
          <Text style={[textStyle, styles.text]}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PublicButton;

const styles = StyleSheet.create({
  container: {},
  button: {
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: maxScale(14),
    lineHeight: maxScale(20),
  },
});
