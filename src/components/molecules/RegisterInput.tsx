import React, {useState, useMemo} from 'react';
import {View, StyleSheet, Text, TextInputProps} from 'react-native';

import PublicTextInput from '@components/atoms/PublicTextInput';
import {colors, maxScale} from '~/constants/theme';
import {IMAGES} from '~/constants/images';

type InputType = 'default' | 'password';
interface RegisterInputProps extends TextInputProps {
  type?: InputType;
  label?: string;
  errorMsg?: string;
  isValid?: boolean;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
}

const RegisterInput = (props: RegisterInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPrivate, setPrivate] = useState<boolean>(true);
  const defaultIcon = useMemo(() => {
    if (props.value) {
      if (props.isValid === true) {
        return IMAGES.success;
      } else if (props.isValid === false) {
        return IMAGES.fail;
      } else {
        return IMAGES.delete;
      }
    } else {
      return undefined;
    }
  }, [props.value, props.isValid]);

  const pwdIcon = useMemo(() => {
    if (props.isValid === true) {
      return IMAGES.success;
    } else if (props.isValid === false) {
      return IMAGES.fail;
    } else {
      if (isPrivate === true) {
        return IMAGES.preivew;
      } else {
        return IMAGES.private;
      }
    }
  }, [isPrivate, props.isValid]);

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.inputTitle}>{props.label}</Text>
      </View>
      <View
        style={[
          styles.input,
          props.isValid !== undefined
            ? {
                borderBottomColor: props.isValid
                  ? colors.SUCCESS
                  : colors.ERROR_ALERT,
              }
            : {
                borderBottomColor: isFocus ? colors.GRAY01 : colors.GRAY05,
              },
        ]}>
        {props.type === 'password' ? (
          <PublicTextInput
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            secureTextEntry={isPrivate ? true : false}
            img={pwdIcon}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            onPressIcon={() => {
              props.isValid === undefined && isPrivate
                ? setPrivate(false)
                : setPrivate(true);
            }}
          />
        ) : (
          <PublicTextInput
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            img={defaultIcon}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            onPressIcon={
              props.isValid === undefined ? props.onPressIcon : undefined
            }
          />
        )}
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.errorMsg,
            props.isValid !== undefined
              ? {
                  color: props.isValid ? colors.SUCCESS : colors.ERROR_ALERT,
                }
              : {color: colors.GRAY03},
          ]}>
          {props.errorMsg}
        </Text>
      </View>
    </View>
  );
};

export default RegisterInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    color: colors.GRAY01,
  },
  label: {
    marginBottom: maxScale(15),
  },
  inputTitle: {
    fontSize: maxScale(16),
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginTop: maxScale(8),
    marginBottom: maxScale(20),
  },
  errorMsg: {
    color: colors.GRAY03,
    fontSize: maxScale(12),
  },
});
