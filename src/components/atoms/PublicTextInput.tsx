import React, {RefObject, useState} from 'react';
import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IMAGES} from '~/constants/images';

import {maxScale} from '~/constants/theme';
import {colors} from '~/constants/theme';

interface Props extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  onChange?: () => void;
  onPressIcon?: () => void;
}

const PublicTextInput = ({...props}: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState('');
  return (
    <View
      style={[
        styles.container,
        {borderBottomColor: isFocus ? colors.GRAY01 : colors.GRAY05},
      ]}>
      <TextInput
        selectionColor={'black'}
        style={styles.input}
        ref={props.textInputRef}
        placeholderTextColor={colors.GRAY04}
        value={value}
        onChangeText={text => setValue(text)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
      <View style={styles.inputImg}>
        <TouchableOpacity onPress={props.onPressIcon} activeOpacity={0.6}>
          <Image source={value ? IMAGES.Delete : null} />
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
    width: '90%',
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
