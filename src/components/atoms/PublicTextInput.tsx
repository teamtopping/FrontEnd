import React, {RefObject} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {IMAGES} from '~/constants/images';
import {maxScale} from '~/constants/theme';

export type PublicTextInputType = 'Default' | 'Password';

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputRef?: RefObject<TextInput>;
  onPressButton?: () => void;
  isValid?: boolean | undefined;
  warningMsg?: string;
  isSuccess?: boolean;
  type?: PublicTextInputType;
  contentTitle?: string;
}

const PublicTextInput = ({...props}: Props) => {
  return (
    <>
      <View style={[props.containerStyle, styles.container]}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.contentTitle}</Text>
        </View>
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
        {/* btn */}
      </View>
      <View style={styles.warningContainer}>
        {props.warningMsg && (
          <Text style={props.isValid ? styles.successText : styles.warningText}>
            {props.warningMsg}
          </Text>
        )}
      </View>
    </>
  );
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#3C4650',
    width: maxScale(320),
    height: maxScale(66),
  },
  header: {
    width: maxScale(320),
    height: maxScale(16),
  },
  title: {
    fontSize: maxScale(16),
  },
  input: {
    textAlign: 'left',
    color: '#212224',
    fontSize: maxScale(14),
    marginBottom: maxScale(10),
  },
  warningContainer: {
    marginBottom: maxScale(13),
    height: maxScale(18),
    left: maxScale(15),
  },
  warningText: {
    position: 'absolute',
    fontSize: maxScale(14),
    lineHeight: maxScale(18),
    color: '#FF5555',
    marginTop: maxScale(8),
  },
  successText: {
    position: 'absolute',
    fontSize: maxScale(12),
    lineHeight: maxScale(17),
    color: '#4BAF69',
    marginTop: maxScale(8),
  },
});
