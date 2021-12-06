import React, {RefObject} from 'react';
import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IMAGES} from '~/constants/images';

import {maxScale} from '~/constants/theme';
import {colors} from '~/constants/theme';

interface Props extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  value: string;
  type: string;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
}

const PublicTextInput = ({...props}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={'black'}
        style={styles.input}
        ref={props.textInputRef}
        placeholderTextColor={colors.GRAY04}
        value={props.value}
        type={props.type}
        onChangeText={props.onChangeText}
        {...props}
      />
      <View style={styles.inputImg}>
        <TouchableOpacity onPress={props.onPressIcon} activeOpacity={0.6}>
          <Image source={props.value ? IMAGES.delete : null} />
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

// TODO:: DELETE 아이콘 누르면 밸류 삭제
