import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors, maxScale} from '~/constants/theme';
import PublicTextInput, {
  PublicTextInputProps,
} from '@components/atoms/PublicTextInput';
import {IMAGES} from '~/constants/images';

type RegisterInputType = 'default' | 'password';
interface Props extends PublicTextInputProps {
  type?: RegisterInputType;
  title?: string;
  returnMsg?: string;
  isValid?: boolean;
  isPrivate?: boolean;
}

const RegisterInput = ({...props}: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
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
        <PublicTextInput
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          img={props.type === 'default' && props.value ? IMAGES.delete : null}>
          {props.value}
        </PublicTextInput>
      </View>
      <View style={styles.returnZone}>
        <Text
          style={[
            styles.returnMsg,
            {color: props.isValid ? colors.SUCCESS : colors.ERROR_ALERT},
          ]}>
          {props.returnMsg}
        </Text>
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
    fontSize: maxScale(12),
  },
});
