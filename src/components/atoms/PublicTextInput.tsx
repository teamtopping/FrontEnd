import React, {RefObject, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IMAGES} from '~/constants/images';
import {maxScale} from '~/constants/theme';

export type PublicTextInputType = 'Validity' | 'Password';

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentTitle?: string;
  textInputRef?: RefObject<TextInput>;
  warningMsg?: string;
  onPressButton?: () => void;
  type?: PublicTextInputType;
  isPreview?: boolean | undefined;
  isValid?: boolean | undefined;
}

const PublicTextInput = ({...props}: Props) => {
  const TextInputButton = useMemo(() => {
    if (props.type === 'Password') {
      if (props.isPreview === false) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.typeContainer}
            onPress={props.onPressButton}>
            <Image source={IMAGES.Preivew} style={styles.InputImg} />
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.typeContainer}
            onPress={props.onPressButton}>
            <Image source={IMAGES.Private} style={styles.InputImg} />
          </TouchableOpacity>
        );
      }
    } else if (props.type === 'Validity') {
      if (props.isValid === true) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.typeContainer}
            onPress={props.onPressButton}>
            <Image source={IMAGES.Success} style={styles.InputImg} />
          </TouchableOpacity>
        );
      } else if (props.isValid === false) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.typeContainer}
            onPress={props.onPressButton}>
            <Image source={IMAGES.Fail} style={styles.InputImg} />
          </TouchableOpacity>
        );
      }
    }
  }, [props.type, props.isPreview, props.onPressButton, props.isValid]);
  if (props.type === 'Validity') {
    return (
      <>
        <View
          style={[
            styles.container,
            props.isValid ? {borderColor: '#4BAF69'} : {borderColor: '#FF5555'},
          ]}>
          <View style={styles.header}>
            <Text style={styles.title}>{props.contentTitle}</Text>
          </View>
          <TextInput
            selectionColor={'black'}
            style={styles.input}
            ref={props.textInputRef}
            placeholderTextColor={'#A5A7AB'}
            {...props}
          />
          {TextInputButton}
        </View>
        <View style={styles.warningContainer}>
          {props.warningMsg && (
            <Text
              style={props.isValid ? styles.successText : styles.warningText}>
              {props.warningMsg}
            </Text>
          )}
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={[styles.container]}>
          <View style={styles.header}>
            <Text style={styles.title}>{props.contentTitle}</Text>
          </View>
          <TextInput
            selectionColor={'black'}
            style={styles.input}
            ref={props.textInputRef}
            placeholderTextColor={'#A5A7AB'}
            {...props}
          />
          {TextInputButton}
        </View>
        <View style={styles.warningContainer}>
          {props.warningMsg && (
            <Text
              style={props.isValid ? styles.successText : styles.warningText}>
              {props.warningMsg}
            </Text>
          )}
        </View>
      </>
    );
  }
};

export default PublicTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#3C4650',
    width: maxScale(320),
    height: maxScale(66),
  },
  header: {
    width: maxScale(320),
    height: maxScale(16),
    marginBottom: maxScale(20),
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
    fontSize: maxScale(12),
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
  typeContainer: {
    position: 'absolute',
    bottom: maxScale(10),
    left: maxScale(300),
  },
  InputImg: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
