import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import {maxScale} from '~/constants/theme';

export interface Props extends TextProps {
  containerStyle?: StyleProp<ViewStyle>;
  content: string;
}

const PublicText = ({...props}: Props) => {
  return (
    <>
      <View style={[props.containerStyle, styles.container]}>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </>
  );
};

export default PublicText;

const styles = StyleSheet.create({
  container: {
    width: maxScale(320),
    height: maxScale(16),
  },
  content: {
    fontSize: maxScale(16),
    color: '#212224',
    fontWeight: 'bold',
  },
});
