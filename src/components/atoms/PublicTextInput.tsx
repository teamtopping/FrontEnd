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

interface Props extends TextInputProps {
  textInputRef?: RefObject<TextInput>;
  icon?: ImageSourcePropType;
  onChangeText?: () => void;
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
        onChangeText={props.onChangeText}
        {...props}
      />
      <View style={styles.inputImg}>
        <TouchableOpacity onPress={props.onPressIcon} activeOpacity={0.6}>
          <Image source={props.icon} />
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
    borderBottomWidth: 1,
    width: '90%',
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
