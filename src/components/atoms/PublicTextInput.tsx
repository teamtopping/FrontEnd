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

export type PublicTextInputType = 'Default' | 'Password';

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentTitle?: string;
  textInputRef?: RefObject<TextInput>;
  warningMsg?: string;
  onPressButton?: () => void;
  type?: PublicTextInputType;
  isValid?: boolean | undefined;
  isSuccess?: boolean;
  onChangeValue?: (text: string) => void;
}

const PublicTextInput = ({...props}: Props) => {
  const DeleteImg = useMemo(() => {
    if (props.value) {
      return IMAGES.Default;
    } else {
      return;
    }
  }, [props.value]);

  const TextInputButton = useMemo(() => {
    if (props.type === 'Default') {
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.typeContainer}
          onPress={props.onPressButton}>
          <Image source={DeleteImg} style={styles.deleteImg} />
        </TouchableOpacity>
      );
    }
  }, [props.type, props.onPressButton, DeleteImg]);

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
        {TextInputButton}
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
  deleteImg: {
    width: maxScale(20),
    height: maxScale(20),
  },
});
