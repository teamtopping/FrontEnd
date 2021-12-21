import React from 'react';
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
  img?: ImageSourcePropType;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
}

const PublicTextInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={'black'}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor={colors.GRAY04}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
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
    fontSize: maxScale(14),
    fontWeight: '400',
  },
  inputImg: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
