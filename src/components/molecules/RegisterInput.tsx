import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInputProps} from 'react-native';

import PublicTextInput from '@components/atoms/PublicTextInput';
import {colors, maxScale} from '~/constants/theme';
import {IMAGES} from '~/constants/images';

type InputType = 'default' | 'password';
export interface RegisterInputProps extends TextInputProps {
  label?: string;
  type?: InputType;
  errorMsg?: string;
}

const RegisterInput = ({...props}: RegisterInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPrivate, setPrivate] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.inputTitle}>{props.label}</Text>
      </View>
      <View
        style={[
          styles.input,
          {borderBottomColor: isFocus ? colors.GRAY01 : colors.GRAY05},
        ]}>
        {props.type === 'password' ? (
          <PublicTextInput
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            secureTextEntry={isPrivate ? true : false}
            img={isPrivate ? IMAGES.preivew : IMAGES.private}
            value={props.value}
            onPressIcon={() => {
              isPrivate ? setPrivate(false) : setPrivate(true);
            }}
          />
        ) : (
          <PublicTextInput
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            img={props.value ? IMAGES.delete : undefined}
            value={props.value}
          />
        )}
      </View>
      <View style={styles.errorContainer}>
        <Text style={[styles.errorMsg]}>{props.errorMsg}</Text>
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
    marginBottom: maxScale(6),
  },
  inputTitle: {
    fontSize: maxScale(20),
  },
  input: {
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginTop: maxScale(8),
  },
  errorMsg: {
    color: colors.GRAY03,
    fontSize: maxScale(12),
  },
});
