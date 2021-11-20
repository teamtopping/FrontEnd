import React, {RefObject, useState} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {colors, maxScale} from '~/constants/theme';

export interface Props extends TextInputProps {
  validation?: 'error' | 'success';
  textInputRef?: RefObject<TextInput>;
  onPressButton?: () => void;
}

const PublicTextInput = ({...props}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  let containerStyle: StyleProp<ViewStyle> = styles.defaultContainer;
  let button = <></>;

  if (isFocused) {
    containerStyle = styles.focusedContainer;
    button = (
      <Image
        style={styles.button}
        source={require('@assets/input_delete.png')}
      />
    );
  } else if (props.validation === 'error') {
    containerStyle = styles.errorContainer;
    button = (
      <Image
        style={styles.button}
        source={require('@assets/input_error.png')}
      />
    );
  } else if (props.validation === 'success') {
    containerStyle = styles.successContainer;
    button = (
      <Image
        style={styles.button}
        source={require('@assets/input_success.png')}
      />
    );
  }
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          selectionColor={'black'}
          style={styles.input}
          ref={props.textInputRef}
          allowFontScaling={false}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor={props.editable ? colors.GRAY04 : colors.GRAY05}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {button}
      </View>
    </>
  );
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: maxScale(335),
    height: maxScale(44),
  },
  defaultContainer: {
    borderColor: colors.GRAY05,
  },
  focusedContainer: {
    borderColor: colors.MAIN,
  },
  errorContainer: {
    borderBottomColor: colors.ERROR_ALERT,
  },
  successContainer: {
    borderBottomColor: colors.SUCCESS,
  },
  input: {
    padding: 0,
    textAlign: 'left',
    color: colors.GRAY01,
    fontWeight: 'normal',
    fontSize: maxScale(14),
    flexBasis: '90%',
  },
  button: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
