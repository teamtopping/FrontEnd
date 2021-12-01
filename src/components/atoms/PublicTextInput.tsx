import React, {RefObject} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {maxScale} from '~/constants/theme';
import {colors} from '~/constants/theme';

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
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
      <View style={styles.imageDiv}>
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
  imageDiv: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
