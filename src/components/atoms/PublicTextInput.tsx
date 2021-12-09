import React, {RefObject} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {maxScale} from '~/constants/theme';
import {colors} from '~/constants/theme';

// Export for RegisterInput
export interface PublicTextInputProps extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  img?: ImageSourcePropType;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
}

const PublicTextInput = ({...props}: PublicTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={'black'}
        style={styles.input}
        placeholderTextColor={colors.GRAY04}
        ref={props.textInputRef}
        onChangeText={props.onChangeText}
        {...props}
      />
      {/* pressable icon */}
      <View style={styles.inputImg}>
        <TouchableOpacity onPress={props.onPressIcon} activeOpacity={0.6}>
          <Image source={props.img} />
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
