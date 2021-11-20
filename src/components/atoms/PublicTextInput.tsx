import React, {RefObject} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {maxScale} from '~/constants/theme';
// import {IMAGES} from '~/constants/images';

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputRef?: RefObject<TextInput>;
  onPressButton?: () => void;
}

const PublicTextInput = ({...props}: Props) => {
  return (
    <>
      <View style={[props.containerStyle, styles.container]}>
        <TextInput
          selectionColor={'black'}
          style={styles.input}
          ref={props.textInputRef}
          allowFontScaling={false}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor={'#A5A7AB'}
          {...props}
        />
      </View>
    </>
  );
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderBottomWidth: 1,
    width: maxScale(320),
    height: maxScale(66),
    paddingBottom: maxScale(10),
  },
  input: {
    color: '#212224',
    fontSize: maxScale(14),
  },
});
// warningContainer: {
//   marginBottom: maxScale(13),
//   height: maxScale(18),
//   left: maxScale(25),
// },
// warningText: {
//   position: 'absolute',
//   fontSize: maxScale(14),
//   lineHeight: maxScale(18),
//   color: '#FF97A8',
//   marginTop: maxScale(8),
// },
// successText: {
//   position: 'absolute',
//   fontSize: maxScale(14),
//   lineHeight: maxScale(18),
//   color: '#B7D4FE',
//   marginTop: maxScale(8),
// },
// typeContainer: {
//   position: 'relative',
//   top: maxScale(23),
// },
// arrowImg: {
//   width: maxScale(36),
//   height: maxScale(17),
// },
// checkImg: {
//   width: maxScale(26),
//   height: maxScale(17),
// },
