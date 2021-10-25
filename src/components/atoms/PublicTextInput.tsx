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
          placeholderTextColor={'#999999'}
          {...props}
        />
      </View>
    </>
  );
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 100,
    width: maxScale(335),
    height: maxScale(68),
    paddingHorizontal: maxScale(30),
  },
  input: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: maxScale(18),
    flexBasis: '90%',
  },
  warningContainer: {
    marginBottom: maxScale(13),
    height: maxScale(18),
    left: maxScale(25),
  },
  warningText: {
    position: 'absolute',
    fontSize: maxScale(14),
    lineHeight: maxScale(18),
    color: '#FF97A8',
    marginTop: maxScale(8),
  },
  successText: {
    position: 'absolute',
    fontSize: maxScale(14),
    lineHeight: maxScale(18),
    color: '#B7D4FE',
    marginTop: maxScale(8),
  },
  typeContainer: {
    position: 'relative',
    top: maxScale(23),
  },
  arrowImg: {
    width: maxScale(36),
    height: maxScale(17),
  },
  checkImg: {
    width: maxScale(26),
    height: maxScale(17),
  },
});
