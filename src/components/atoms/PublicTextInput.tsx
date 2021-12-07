import React, {RefObject, useState} from 'react';
import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IMAGES} from '~/constants/images';

import {maxScale} from '~/constants/theme';
import {colors} from '~/constants/theme';

export type InputType = 'default' | 'password';

interface Props extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  type?: InputType;
  isValid?: boolean;
  isPrivate?: boolean;
  onChangeText?: (text: string) => void;
}

const PublicTextInput = ({...props}: Props) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={'black'}
        type={props.type}
        style={styles.input}
        placeholderTextColor={colors.GRAY04}
        ref={props.textInputRef}
        value={value}
        onChangeText={text => setValue(text)}
        isValid={props.isValid}
        isPrivate={props.isPrivate}
        {...props}
      />
      <View style={styles.inputImg}>
        <TouchableOpacity onPress={() => setValue('')} activeOpacity={0.6}>
          <Image source={value ? IMAGES.delete : null} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderBottomColor: colors.GRAY05,
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    paddingBottom: maxScale(10),
    color: colors.GRAY01,
    fontSize: maxScale(18),
  },
  inputImg: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
