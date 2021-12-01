import React, {RefObject} from 'react';
import {ImageSourcePropType, TextInput, TextInputProps} from 'react-native';
import PublicInput from '../atoms/PublicTextInput';

interface Props extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  icon?: ImageSourcePropType;
  onChangeText?: () => void;
  onPressIcon?: () => void;
}

const RegisterInput = ({...props}: Props) => {
  return (
    <>
      <PublicInput icon={props.icon} />
    </>
  );
};

export default RegisterInput;
