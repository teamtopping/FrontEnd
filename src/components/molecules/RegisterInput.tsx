import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import PublicTextInput, {
  PublicTextInputProps,
} from '@components/atoms/PublicTextInput';
import {colors, maxScale} from '~/constants/theme';
import {IMAGES} from '~/constants/images';

type InputType = 'default' | 'password';
export interface RegisterInputProps extends PublicTextInputProps {
  title?: string;
  type?: InputType;
  returnMsg?: string;
}

const RegisterInput = ({...props}: RegisterInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPrivate, setPrivate] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
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
            onPressIcon={() => {
              isPrivate ? setPrivate(false) : setPrivate(true);
            }}>
            {props.value}
          </PublicTextInput>
        ) : (
          <PublicTextInput
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            img={props.value ? IMAGES.delete : null}>
            {props.value}
          </PublicTextInput>
        )}
      </View>
      <View style={styles.returnZone}>
        <Text style={[styles.returnMsg]}>{props.returnMsg}</Text>
      </View>
    </View>
  );
};

export default RegisterInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    color: colors.GRAY01,
  },
  header: {
    marginBottom: maxScale(6),
  },
  title: {
    fontSize: maxScale(20),
  },
  input: {
    borderBottomWidth: 1,
  },
  returnZone: {
    marginTop: maxScale(8),
  },
  returnMsg: {
    color: colors.GRAY03,
    fontSize: maxScale(12),
  },
});
